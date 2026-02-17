const express = require('express');
const { Shipment } = require('../models/Shipment');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

// Public: Track a shipment by ID
router.get('/:id', async (req, res) => {
    try {
        const shipment = await Shipment.findByPk(req.params.id);
        if (!shipment) {
            return res.status(404).json({ error: 'Shipment not found' });
        }

        // Live AIS Sync if MMSI is provided
        if (shipment.mmsi && shipment.status === 'In-Transit') {
            try {
                const response = await fetch(`https://${process.env.RAPIDAPI_HOST}/getAisData?mmsi=${shipment.mmsi}`, {
                    headers: {
                        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                        'x-rapidapi-host': process.env.RAPIDAPI_HOST
                    }
                });

                if (response.ok) {
                    const aisData = await response.json();

                    // Update shipment with live data (Map the API fields to our model)
                    // API structured as: { vessel: { latitude, longitude, speed, course, ... } }
                    if (aisData && aisData.vessel) {
                        const v = aisData.vessel;
                        shipment.currentLocation = `${v.latitude}, ${v.longitude}`;
                        shipment.speed = v.speed || shipment.speed;
                        shipment.heading = v.course || shipment.heading;

                        // Save the update internally
                        await shipment.save();
                    }
                }
            } catch (aisError) {
                console.error('AIS Live Sync Failed:', aisError.message);
                // Continue and return stored data
            }
        }

        res.json(shipment);
    } catch (error) {
        console.error('Tracking Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Admin: Create new shipment
router.post('/', requireAuth(), async (req, res) => {
    try {
        const newShipment = await Shipment.create(req.body);
        res.status(201).json(newShipment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Admin/System: Update location
router.post('/:id/telemetry', async (req, res) => {
    try {
        const shipment = await Shipment.findByPk(req.params.id);
        if (!shipment) return res.status(404).json({ error: 'Shipment not found' });

        const { location, status, timestamp } = req.body;

        shipment.currentLocation = location;
        if (status) shipment.status = status;

        const logs = shipment.telemetryLogs || [];
        logs.push({ location, status, timestamp: timestamp || new Date() });
        shipment.telemetryLogs = logs;

        shipment.changed('telemetryLogs', true);

        await shipment.save();
        res.json({ message: 'Telemetry updated', shipment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
