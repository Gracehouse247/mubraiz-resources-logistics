const { sequelize } = require('../config/db');
const { Shipment } = require('../models/Shipment');

// Random movement utility
const move = (currentLoc) => {
    if (!currentLoc) return '34.0522, -118.2437'; // Default LA
    const [lat, lng] = currentLoc.split(',').map(s => parseFloat(s.trim()));
    // Move by ~500m (0.005 degrees) in random direction
    const deltaLat = (Math.random() - 0.5) * 0.005;
    const deltaLng = (Math.random() - 0.5) * 0.005;
    return `${(lat + deltaLat).toFixed(6)}, ${(lng + deltaLng).toFixed(6)}`;
};

const simulate = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to DB. Starting Simulation... (Press Ctrl+C to stop)');

        setInterval(async () => {
            const shipments = await Shipment.findAll({
                where: { status: 'In-Transit' }
            });

            if (shipments.length === 0) console.log('No active shipments to move.');

            for (const ship of shipments) {
                const oldLoc = ship.currentLocation;
                const newLoc = move(oldLoc);

                // Update fields
                ship.currentLocation = newLoc;
                ship.speed = (15 + Math.random() * 5).toFixed(1); // 15-20 knots
                ship.heading = Math.floor(Math.random() * 360);

                await ship.save();
                console.log(`🚢 Moved ${ship.id} to ${newLoc} (${ship.speed} kts)`);
            }
        }, 5000); // Every 5 seconds

    } catch (error) {
        console.error('❌ DB Connection Failed:', error.message);
        console.log('Make sure your DB is running. Check config/db.js path if issues persist.');
    }
};

simulate();
