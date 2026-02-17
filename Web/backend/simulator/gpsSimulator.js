/**
 * GPS Simulator for Fleet Management Testing
 * Simulates 5 vehicles moving around Lagos, Nigeria
 */

const API_BASE = process.env.API_BASE || 'http://localhost:5000';

// Lagos area coordinates
const LAGOS_CENTER = { lat: 6.5244, lng: 3.3792 };
const ROUTES = [
    // Route 1: Lagos Island to Ikeja
    [
        { lat: 6.4541, lng: 3.3947 },
        { lat: 6.4698, lng: 3.3817 },
        { lat: 6.5027, lng: 3.3644 },
        { lat: 6.5244, lng: 3.3792 },
        { lat: 6.5568, lng: 3.3517 },
        { lat: 6.5774, lng: 3.3515 }
    ],
    // Route 2: Victoria Island to Lekki
    [
        { lat: 6.4281, lng: 3.4219 },
        { lat: 6.4474, lng: 3.4700 },
        { lat: 6.4541, lng: 3.5080 },
        { lat: 6.4698, lng: 3.5500 },
        { lat: 6.4474, lng: 3.5800 }
    ],
    // Route 3: Surulere to Apapa
    [
        { lat: 6.4969, lng: 3.3603 },
        { lat: 6.4698, lng: 3.3817 },
        { lat: 6.4541, lng: 3.3947 },
        { lat: 6.4474, lng: 3.3700 }
    ],
    // Route 4: Yaba to Maryland
    [
        { lat: 6.5074, lng: 3.3731 },
        { lat: 6.5244, lng: 3.3792 },
        { lat: 6.5568, lng: 3.3517 }
    ],
    // Route 5: Ikorodu to Ikeja
    [
        { lat: 6.6186, lng: 3.5089 },
        { lat: 6.5774, lng: 3.4500 },
        { lat: 6.5568, lng: 3.3900 },
        { lat: 6.5774, lng: 3.3515 }
    ]
];

class VehicleSimulator {
    constructor(vehicleId, deviceId, route) {
        this.vehicleId = vehicleId;
        this.deviceId = deviceId;
        this.route = route;
        this.currentIndex = 0;
        this.speed = 40 + Math.random() * 40; // 40-80 km/h
        this.fuelLevel = 60 + Math.random() * 40; // 60-100%
        this.engineStatus = 'on';
    }

    getNextPosition() {
        // Move to next waypoint
        this.currentIndex = (this.currentIndex + 1) % this.route.length;
        const position = this.route[this.currentIndex];

        // Add some random variation
        const lat = position.lat + (Math.random() - 0.5) * 0.001;
        const lng = position.lng + (Math.random() - 0.5) * 0.001;

        // Vary speed
        this.speed = Math.max(0, this.speed + (Math.random() - 0.5) * 10);

        // Decrease fuel gradually
        this.fuelLevel = Math.max(10, this.fuelLevel - Math.random() * 0.5);

        // Calculate heading (simplified)
        const nextIndex = (this.currentIndex + 1) % this.route.length;
        const next = this.route[nextIndex];
        const heading = this.calculateHeading(position.lat, position.lng, next.lat, next.lng);

        return {
            deviceId: this.deviceId,
            latitude: lat,
            longitude: lng,
            speed: this.speed,
            heading: heading,
            altitude: 10 + Math.random() * 20,
            fuelLevel: this.fuelLevel,
            engineStatus: this.engineStatus,
            timestamp: new Date().toISOString()
        };
    }

    calculateHeading(lat1, lon1, lat2, lon2) {
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const y = Math.sin(dLon) * Math.cos(lat2 * Math.PI / 180);
        const x = Math.cos(lat1 * Math.PI / 180) * Math.sin(lat2 * Math.PI / 180) -
            Math.sin(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.cos(dLon);
        let heading = Math.atan2(y, x) * 180 / Math.PI;
        return (heading + 360) % 360;
    }

    async sendData() {
        const data = this.getNextPosition();

        try {
            const response = await fetch(`${API_BASE}/api/fleet/ingest`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log(`✅ Vehicle ${this.deviceId}: Sent GPS data (Speed: ${data.speed.toFixed(1)} km/h)`);
            } else {
                console.error(`❌ Vehicle ${this.deviceId}: Failed to send data`);
            }
        } catch (error) {
            console.error(`❌ Vehicle ${this.deviceId}: Error:`, error.message);
        }
    }
}

// Initialize simulators
const simulators = [
    new VehicleSimulator(1, 'GPS-DEVICE-001', ROUTES[0]),
    new VehicleSimulator(2, 'GPS-DEVICE-002', ROUTES[1]),
    new VehicleSimulator(3, 'GPS-DEVICE-003', ROUTES[2]),
    new VehicleSimulator(4, 'GPS-DEVICE-004', ROUTES[3]),
    new VehicleSimulator(5, 'GPS-DEVICE-005', ROUTES[4])
];

// Run simulation
console.log('🚀 Starting GPS Simulator...');
console.log(`📡 Sending data to: ${API_BASE}/api/fleet/ingest`);
console.log('🚗 Simulating 5 vehicles around Lagos\n');

// Send data every 15 seconds
setInterval(() => {
    simulators.forEach(sim => sim.sendData());
}, 15000);

// Send initial data immediately
simulators.forEach(sim => sim.sendData());
