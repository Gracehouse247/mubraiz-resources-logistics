# Fleet Management System - Quick Start Guide

## Prerequisites
- Node.js 18+ installed
- MySQL database running
- npm or yarn package manager

## Installation Steps

### 1. Backend Setup

```bash
# Navigate to backend directory
cd Web/backend

# Install dependencies
npm install

# Configure environment variables
# Create a .env file with:
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=mubraiz_fleet
PORT=5000

# Run database setup script
node scripts/setupFleetDB.js
```

This will:
- Create all necessary tables (vehicles, drivers, gps_logs, geofences, alerts)
- Seed 5 sample drivers
- Seed 5 sample vehicles with GPS devices
- Create 3 sample geofences around Lagos

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd Web/frontend

# Install dependencies (if not already done)
npm install

# Leaflet is already installed
# Start development server
npm run dev
```

### 3. Start the Backend API

```bash
# In the backend directory
cd Web/backend
npm start
```

The API will be available at `http://localhost:5000`

### 4. Run the GPS Simulator

```bash
# In a new terminal, navigate to backend
cd Web/backend

# Run the simulator
node simulator/gpsSimulator.js
```

The simulator will:
- Simulate 5 vehicles moving around Lagos
- Send GPS data every 15 seconds to the API
- Update vehicle positions, speed, and fuel levels
- Trigger alerts when speed exceeds 100 km/h

## Accessing the System

### Portal Landing Page
Navigate to: `http://localhost:3000/portal`

You'll see cards for:
- **Fleet Management** (NEW) - Your GPS tracking system
- Shipment Tracking
- Client Portal
- Admin Dashboard
- Support Center

### Fleet Dashboard
Direct link: `http://localhost:3000/portal/fleet`

Features:
- **Live Map**: Real-time vehicle positions with custom markers
- **Stats Cards**: Active, Idle, Offline vehicle counts
- **Alerts Panel**: Recent alerts with acknowledgment
- **Vehicle Table**: Complete fleet overview

### Vehicle Management
Link: `http://localhost:3000/portal/fleet/vehicles`

- View all vehicles in grid layout
- Add new vehicles with GPS device IDs
- See vehicle status, mileage, and assigned drivers

### Driver Management
Link: `http://localhost:3000/portal/fleet/drivers`

- View all drivers with safety scores
- Add new drivers with license information
- Monitor driver behavior metrics

## Testing the System

### 1. Watch Live Tracking
1. Open the Fleet Dashboard
2. The map should show 5 vehicles around Lagos
3. Watch as markers update every 15 seconds
4. Hover over markers to see vehicle details

### 2. Monitor Alerts
1. Check the Alerts Panel on the right
2. When a vehicle exceeds 100 km/h, an alert appears
3. Click the check icon to acknowledge alerts

### 3. Add a New Vehicle
1. Go to Vehicle Management
2. Click "Add Vehicle"
3. Fill in the form:
   - Plate Number: MUB-006-LA
   - Device ID: GPS-DEVICE-006
   - Make: Iveco
   - Model: Stralis
   - Year: 2023
4. Click "Add Vehicle"

### 4. View Historical Data
Use the API endpoint:
```bash
curl "http://localhost:5000/api/fleet/history/1?startDate=2026-02-10T00:00:00Z&endDate=2026-02-10T23:59:59Z"
```

## API Testing with Postman/cURL

### Get Live Fleet Data
```bash
curl http://localhost:5000/api/fleet/live
```

### Get All Vehicles
```bash
curl http://localhost:5000/api/fleet/vehicles
```

### Get Recent Alerts
```bash
curl "http://localhost:5000/api/fleet/alerts?acknowledged=false&limit=10"
```

### Create a Geofence
```bash
curl -X POST http://localhost:5000/api/fleet/geofences \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Lekki Warehouse",
    "type": "circle",
    "coordinates": {
      "lat": 6.4474,
      "lng": 3.5500,
      "radius": 400
    },
    "alertOnEntry": true,
    "alertOnExit": true
  }'
```

### Manually Send GPS Data
```bash
curl -X POST http://localhost:5000/api/fleet/ingest \
  -H "Content-Type: application/json" \
  -d '{
    "deviceId": "GPS-DEVICE-001",
    "latitude": 6.5244,
    "longitude": 3.3792,
    "speed": 65,
    "heading": 180,
    "fuelLevel": 75,
    "engineStatus": "on"
  }'
```

## Troubleshooting

### Map Not Loading
- Ensure Leaflet CSS is imported
- Check browser console for errors
- Verify the component is client-side (`"use client"`)

### No GPS Data Showing
- Verify the backend is running on port 5000
- Check that the simulator is sending data (watch console logs)
- Ensure database tables are created (run setupFleetDB.js)

### Vehicles Not Moving
- Confirm the GPS simulator is running
- Check that device IDs match between vehicles and simulator
- Verify API endpoint `/api/fleet/ingest` is accessible

### Database Connection Errors
- Verify MySQL is running
- Check .env credentials are correct
- Ensure the database exists (create it if needed)

## Next Steps

1. **Customize Routes**: Edit `simulator/gpsSimulator.js` to add custom routes
2. **Add More Vehicles**: Use the Vehicle Management UI or API
3. **Create Geofences**: Define your operational zones
4. **Set Alert Rules**: Configure custom alert thresholds
5. **Integrate Real Devices**: Replace simulator with actual GPS hardware

## Production Deployment

### Backend
- Set `NODE_ENV=production`
- Use PM2 or similar for process management
- Enable HTTPS
- Set up database backups
- Configure CORS for your domain

### Frontend
```bash
npm run build
npm start
```

Or deploy to Vercel/Netlify for static hosting.

## Support

For issues or questions:
- Check `FLEET_MANAGEMENT.md` for detailed documentation
- Review API endpoints in `routes/fleetRoutes.js`
- Examine database models in `models/` directory

---

**Happy Tracking! 🚚📍**
