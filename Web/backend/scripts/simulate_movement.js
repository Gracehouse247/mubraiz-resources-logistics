const { sequelize } = require('../config/db');
const { Shipment } = require('../models/Shipment');
const Vehicle = require('../models/Vehicle');
const GPSLog = require('../models/GPSLog');

const moveShip = (currentLoc) => {
    if (!currentLoc) return '34.0522, -118.2437';
    const [lat, lng] = currentLoc.split(',').map(s => parseFloat(s.trim()));
    // Move approx 50-200 meters (0.001 - 0.002 degrees)
    const deltaLat = (Math.random() - 0.5) * 0.002;
    const deltaLng = (Math.random() - 0.5) * 0.002;
    // Keep it realistic (e.g., ships usually move in one general direction, but random for demo)
    return `${(lat + deltaLat).toFixed(6)}, ${(lng + deltaLng).toFixed(6)}`;
};

const moveTruck = (lat, lng) => {
    // Trucks move faster than ships in simulation
    const deltaLat = (Math.random() - 0.5) * 0.004;
    const deltaLng = (Math.random() - 0.5) * 0.004;
    return {
        latitude: parseFloat((lat + deltaLat).toFixed(6)),
        longitude: parseFloat((lng + deltaLng).toFixed(6))
    };
};

const simulate = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to DB. Simulating All Movements... (Press Ctrl+C to stop)');

        setInterval(async () => {
            // 1. Simulate Shipments
            const shipments = await Shipment.findAll({ where: { status: 'In-Transit' } });
            for (const ship of shipments) {
                const newLoc = moveShip(ship.currentLocation);
                ship.currentLocation = newLoc;
                ship.speed = (15 + Math.random() * 5).toFixed(1);
                ship.heading = (ship.heading + (Math.random() - 0.5) * 5 + 360) % 360;
                await ship.save();
                console.log(`🚢 Shipment ${ship.id}: Moved to ${newLoc}`);
            }

            // 2. Simulate Vehicles (Trucks)
            const vehicles = await Vehicle.findAll({ where: { status: 'active' } });
            for (const vehicle of vehicles) {
                // Get latest GPS log to know where the truck is currently
                const latestLog = await GPSLog.findOne({
                    where: { vehicleId: vehicle.id },
                    order: [['timestamp', 'DESC']]
                });

                let currentLat = 6.4531; // Default Lagos
                let currentLng = 3.3958;

                if (latestLog) {
                    currentLat = parseFloat(latestLog.latitude);
                    currentLng = parseFloat(latestLog.longitude);
                }

                const { latitude, longitude } = moveTruck(currentLat, currentLng);
                const speed = (60 + Math.random() * 20).toFixed(1); // 60-80 km/h
                const heading = Math.floor(Math.random() * 360);

                await GPSLog.create({
                    vehicleId: vehicle.id,
                    latitude,
                    longitude,
                    speed,
                    heading,
                    engineStatus: 'on',
                    timestamp: new Date()
                });
                console.log(`🚛 Vehicle ${vehicle.plateNumber}: Moved to ${latitude}, ${longitude} (${speed} km/h)`);
            }
        }, 5000); // Every 5 seconds

    } catch (error) {
        console.error('❌ Simulation Error:', error.message);
    }
};

simulate();
