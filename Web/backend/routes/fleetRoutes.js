const express = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

const router = express.Router();

// Role groups for Fleet Management
const FLEET_MANAGERS = ['super_admin', 'executive', 'fleet_manager'];

const Vehicle = require('../models/Vehicle');
const Driver = require('../models/Driver');
const GPSLog = require('../models/GPSLog');
const Geofence = require('../models/Geofence');
const Alert = require('../models/Alert');
const { Op } = require('sequelize');

// GPS Data Ingestion Endpoint (for IoT devices)
router.post('/ingest', async (req, res) => {
    try {
        const { deviceId, latitude, longitude, speed, heading, altitude, fuelLevel, engineStatus, timestamp } = req.body;

        // Find vehicle by device ID
        const vehicle = await Vehicle.findOne({ where: { deviceId } });
        if (!vehicle) {
            return res.status(404).json({ error: 'Vehicle not found for this device' });
        }

        // Create GPS log entry
        const gpsLog = await GPSLog.create({
            vehicleId: vehicle.id,
            latitude,
            longitude,
            speed: speed || 0,
            heading: heading || 0,
            altitude: altitude || 0,
            fuelLevel: fuelLevel || null,
            engineStatus: engineStatus || 'off',
            timestamp: timestamp || new Date()
        });

        // Update vehicle status based on engine
        const newStatus = engineStatus === 'on' ? (speed > 5 ? 'active' : 'idle') : 'offline';
        await vehicle.update({ status: newStatus });

        // Real-time Push via Socket.io
        try {
            const { getIO } = require('../config/socket');
            const io = getIO();
            io.emit('location_update', {
                vehicleId: vehicle.id,
                plateNumber: vehicle.plateNumber,
                latitude,
                longitude,
                speed,
                heading,
                status: newStatus,
                timestamp: gpsLog.timestamp
            });
        } catch (err) {
            console.error('Socket Emission Failed:', err);
        }

        // Check for alerts (overspeeding, geofence breaches, etc.)
        await checkAlerts(vehicle, gpsLog);

        res.status(201).json({ success: true, logId: gpsLog.id });
    } catch (error) {
        console.error('GPS Ingestion Error:', error);
        res.status(500).json({ error: 'Failed to process GPS data' });
    }
});

// Get live location of all vehicles
router.get('/live', async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll({
            attributes: ['id', 'plateNumber', 'make', 'model', 'status'],
            include: [{
                model: GPSLog,
                as: 'latestLocation',
                limit: 1,
                order: [['timestamp', 'DESC']],
                attributes: ['latitude', 'longitude', 'speed', 'heading', 'timestamp', 'engineStatus']
            }]
        });

        res.json({ vehicles });
    } catch (error) {
        console.error('Live Tracking Error:', error);
        res.status(500).json({ error: 'Failed to fetch live data' });
    }
});

// Get historical path for a vehicle
router.get('/history/:vehicleId', async (req, res) => {
    try {
        const { vehicleId } = req.params;
        const { startDate, endDate } = req.query;

        const whereClause = { vehicleId };
        if (startDate && endDate) {
            whereClause.timestamp = {
                [Op.between]: [new Date(startDate), new Date(endDate)]
            };
        }

        const history = await GPSLog.findAll({
            where: whereClause,
            order: [['timestamp', 'ASC']],
            attributes: ['latitude', 'longitude', 'speed', 'heading', 'timestamp', 'engineStatus']
        });

        res.json({ history });
    } catch (error) {
        console.error('History Fetch Error:', error);
        res.status(500).json({ error: 'Failed to fetch history' });
    }
});

// Get all vehicles
router.get('/vehicles', async (req, res) => {
    try {
        const vehicles = await Vehicle.findAll({
            include: [{
                model: Driver,
                as: 'assignedDriver',
                attributes: ['id', 'firstName', 'lastName', 'phone', 'safetyScore']
            }]
        });
        res.json({ vehicles });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch vehicles' });
    }
});

// Create new vehicle
router.post('/vehicles', async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        res.status(201).json({ vehicle });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create vehicle' });
    }
});

// Get all drivers
router.get('/drivers', async (req, res) => {
    try {
        const drivers = await Driver.findAll({
            order: [['safetyScore', 'DESC']]
        });
        res.json({ drivers });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch drivers' });
    }
});

// Create new driver
router.post('/drivers', async (req, res) => {
    try {
        const driver = await Driver.create(req.body);
        res.status(201).json({ driver });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create driver' });
    }
});

// Get all geofences
router.get('/geofences', async (req, res) => {
    try {
        const geofences = await Geofence.findAll({
            where: { status: 'active' }
        });
        res.json({ geofences });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch geofences' });
    }
});

// Create geofence
router.post('/geofences', async (req, res) => {
    try {
        const geofence = await Geofence.create(req.body);
        res.status(201).json({ geofence });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create geofence' });
    }
});

// Get recent alerts
router.get('/alerts', async (req, res) => {
    try {
        const { acknowledged, limit = 50 } = req.query;

        const whereClause = {};
        if (acknowledged !== undefined) {
            whereClause.acknowledged = acknowledged === 'true';
        }

        const alerts = await Alert.findAll({
            where: whereClause,
            include: [{
                model: Vehicle,
                as: 'vehicle',
                attributes: ['plateNumber', 'make', 'model']
            }],
            order: [['timestamp', 'DESC']],
            limit: parseInt(limit)
        });

        res.json({ alerts });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch alerts' });
    }
});

// Acknowledge alert
router.patch('/alerts/:id/acknowledge', async (req, res) => {
    try {
        const { id } = req.params;
        const { acknowledgedBy } = req.body;

        const alert = await Alert.findByPk(id);
        if (!alert) {
            return res.status(404).json({ error: 'Alert not found' });
        }

        await alert.update({
            acknowledged: true,
            acknowledgedBy,
            acknowledgedAt: new Date()
        });

        res.json({ alert });
    } catch (error) {
        res.status(500).json({ error: 'Failed to acknowledge alert' });
    }
});

// Helper function to check for alerts
async function checkAlerts(vehicle, gpsLog) {
    const alerts = [];

    // Check overspeeding (assuming 100 km/h limit for now)
    if (gpsLog.speed > 100) {
        alerts.push({
            vehicleId: vehicle.id,
            type: 'overspeeding',
            severity: gpsLog.speed > 120 ? 'high' : 'medium',
            message: `Vehicle ${vehicle.plateNumber} exceeding speed limit at ${gpsLog.speed} km/h`,
            metadata: { speed: gpsLog.speed, location: { lat: gpsLog.latitude, lng: gpsLog.longitude } },
            timestamp: gpsLog.timestamp
        });
    }

    // Check geofence breaches
    const geofences = await Geofence.findAll({ where: { status: 'active' } });
    for (const geofence of geofences) {
        const isInside = checkPointInGeofence(gpsLog.latitude, gpsLog.longitude, geofence);

        // You would need to track previous state to detect entry/exit
        // For now, simplified logic
        if (isInside && geofence.alertOnEntry) {
            alerts.push({
                vehicleId: vehicle.id,
                type: 'geofence_entry',
                severity: 'low',
                message: `Vehicle ${vehicle.plateNumber} entered ${geofence.name}`,
                metadata: { geofenceId: geofence.id, geofenceName: geofence.name },
                timestamp: gpsLog.timestamp
            });
        }
    }

    // Create all alerts
    if (alerts.length > 0) {
        await Alert.bulkCreate(alerts);
    }
}

// Helper function to check if point is in geofence
function checkPointInGeofence(lat, lng, geofence) {
    if (geofence.type === 'circle') {
        const { lat: centerLat, lng: centerLng, radius } = geofence.coordinates;
        const distance = getDistanceFromLatLonInKm(lat, lng, centerLat, centerLng);
        return distance <= radius / 1000; // radius in meters, convert to km
    }
    // Polygon logic would go here (ray casting algorithm)
    return false;
}

// Haversine formula for distance calculation
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

module.exports = router;
