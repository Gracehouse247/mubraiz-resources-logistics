# Fleet Management & GPS Tracking System

## Overview
A sophisticated AI-powered fleet management and GPS tracking solution integrated into the Mubraiz Resources platform. This system provides real-time vehicle monitoring, driver behavior analysis, geofencing, and comprehensive fleet analytics.

## Features

### Core Tracking & Monitoring
- **Real-Time GPS Tracking**: Live vehicle positions updated every 10-15 seconds
- **Interactive Map Interface**: OpenStreetMap integration with custom vehicle markers
- **Visual History Playback**: Replay vehicle routes with speed and stop analysis
- **Multi-Status Tracking**: Active, Idle, Maintenance, and Offline states

### Advanced Fleet Management
- **Geofencing**: Create circular and polygon boundaries with entry/exit alerts
- **Driver Behavior Analysis**: 
  - Harsh braking detection
  - Rapid acceleration monitoring
  - Overspeeding alerts
  - AI-calculated safety scores (0-100)
- **Fuel Management**:
  - Real-time fuel level tracking
  - Consumption analysis
  - Theft detection (sudden drops)
- **Maintenance Scheduling**:
  - Mileage-based service reminders
  - Date-based alerts (insurance, registration)
  - Service history tracking

### Alert System
Supports 50+ alert types including:
- Overspeeding
- Geofence entry/exit
- Harsh braking & rapid acceleration
- Power cut & SOS
- Fuel theft
- Excessive idle time
- Maintenance due
- Low fuel warnings

### User Interface
- **Fleet Dashboard**: Real-time overview with stats and live map
- **Vehicle Management**: CRUD operations for fleet vehicles
- **Driver Management**: Driver profiles with safety scoring
- **Alerts Panel**: Real-time notifications with acknowledgment system
- **Responsive Design**: Optimized for desktop and mobile

## Technology Stack

### Backend
- **Framework**: Node.js + Express
- **Database**: MySQL with Sequelize ORM
- **Models**: Vehicle, Driver, GPSLog, Geofence, Alert
- **API**: RESTful endpoints for all operations

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Maps**: Leaflet + OpenStreetMap
- **Brand**: max-w-7xl layout, #a1dc84 accent color

## API Endpoints

### GPS & Tracking
```
POST   /api/fleet/ingest          # GPS data ingestion from IoT devices
GET    /api/fleet/live             # Real-time location of all vehicles
GET    /api/fleet/history/:id      # Historical path data
```

### Fleet Management
```
GET    /api/fleet/vehicles         # List all vehicles
POST   /api/fleet/vehicles         # Add new vehicle
GET    /api/fleet/drivers          # List all drivers
POST   /api/fleet/drivers          # Add new driver
```

### Geofencing & Alerts
```
GET    /api/fleet/geofences        # List all geofences
POST   /api/fleet/geofences        # Create geofence
GET    /api/fleet/alerts           # Get alerts (with filters)
PATCH  /api/fleet/alerts/:id/acknowledge  # Acknowledge alert
```

## Database Schema

### Vehicles
- Basic info: plateNumber, make, model, year, VIN
- Tracking: deviceId, status, currentMileage
- Maintenance: lastServiceMileage, nextServiceDue
- Relationships: assignedDriverId

### Drivers
- Personal: firstName, lastName, email, phone
- License: licenseNumber, licenseExpiry
- Performance: safetyScore, totalTrips
- Behavior: harshBrakingCount, rapidAccelerationCount, overspeedingCount

### GPSLogs
- Location: latitude, longitude, altitude
- Movement: speed, heading
- Vehicle state: fuelLevel, engineStatus
- Metadata: timestamp, accuracy

### Geofences
- Definition: name, type (circle/polygon), coordinates
- Styling: color
- Alerts: alertOnEntry, alertOnExit

### Alerts
- Classification: type, severity (low/medium/high/critical)
- Content: message, metadata (JSON)
- Tracking: acknowledged, acknowledgedBy, acknowledgedAt

## Setup & Testing

### 1. Backend Setup
```bash
cd Web/backend
npm install
# Ensure .env has database credentials
npm start
```

### 2. Frontend Setup
```bash
cd Web/frontend
npm install
npm run dev
```

### 3. GPS Simulator
```bash
cd Web/backend/simulator
node gpsSimulator.js
```

The simulator will:
- Create 5 virtual vehicles moving around Lagos
- Send GPS data every 15 seconds
- Simulate realistic speed variations and fuel consumption
- Generate alerts when speed exceeds 100 km/h

## Usage

### Accessing the Dashboard
Navigate to: `http://localhost:3000/portal/fleet`

### Adding Vehicles
1. Go to Vehicle Management
2. Click "Add Vehicle"
3. Enter details including GPS Device ID
4. Save

### Adding Drivers
1. Go to Driver Management
2. Click "Add Driver"
3. Enter personal and license information
4. Save

### Monitoring Fleet
- View real-time positions on the map
- Check vehicle status (Active/Idle/Offline)
- Monitor recent alerts in the sidebar
- Acknowledge alerts by clicking the check icon

### Creating Geofences
(Feature available via API, UI coming soon)
```javascript
POST /api/fleet/geofences
{
  "name": "Lagos Depot",
  "type": "circle",
  "coordinates": {
    "lat": 6.5244,
    "lng": 3.3792,
    "radius": 500  // meters
  },
  "alertOnEntry": true,
  "alertOnExit": true
}
```

## Brand Integration
The Fleet Management system follows Mubraiz Resources' design system:
- **Layout**: max-w-7xl container (1280px)
- **Primary Color**: #a1dc84 (brand green)
- **Typography**: Outfit font family
- **Components**: Rounded corners (rounded-xl, rounded-2xl, rounded-3xl)
- **Shadows**: Subtle elevation with brand-colored shadows

## Future Enhancements
- [ ] Video Telematics (ADAS & DMS)
- [ ] School Bus Module with student tracking
- [ ] FASTag integration for toll management
- [ ] TPMS (Tire Pressure Monitoring)
- [ ] Axle Load Monitoring
- [ ] Expense Management Platform
- [ ] Advanced Analytics Dashboard
- [ ] Mobile App (React Native)
- [ ] Remote Engine Immobilization UI

## Security Considerations
- GPS device authentication via deviceId
- Alert acknowledgment tracking
- Role-based access control (planned)
- Encrypted communication (HTTPS in production)

## Performance
- GPS logs are indexed by vehicleId and timestamp
- Real-time updates use efficient polling (15s intervals)
- Map markers update without full page reload
- Optimized queries for historical data retrieval

---

**Developed for Mubraiz Resources Limited**  
Premium Global Logistics & Haulage Solutions
