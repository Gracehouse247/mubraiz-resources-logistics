# Fleet Management System - Required Backend APIs

## Overview
This document outlines the **essential backend APIs** needed to make the Fleet Management system work with **real GPS data from actual vehicles** (not simulated/mock data).

---

## 🎯 Core APIs Required

### 1. **GPS Data Ingestion API**
**Purpose**: Receive real-time GPS data from IoT devices installed in vehicles

```
POST /api/fleet/gps/ingest
```

**Request Body**:
```json
{
  "deviceId": "GPS-DEVICE-001",
  "latitude": 6.5244,
  "longitude": 3.3792,
  "speed": 65,
  "heading": 180,
  "altitude": 45,
  "accuracy": 5,
  "timestamp": "2026-02-10T14:30:00Z",
  "fuelLevel": 75,
  "engineStatus": "on",
  "odometer": 15420
}
```

**Response**:
```json
{
  "success": true,
  "message": "GPS data recorded",
  "vehicleId": 1
}
```

**Notes**:
- This endpoint receives data from GPS hardware devices
- Should be called every 10-30 seconds by the GPS device
- Must validate deviceId and link to vehicle
- Store in database for historical tracking

---

### 2. **Live Vehicle Locations API**
**Purpose**: Get current positions of all vehicles for the live map

```
GET /api/fleet/vehicles/live
```

**Response**:
```json
{
  "vehicles": [
    {
      "id": 1,
      "plateNumber": "MUB-001-LA",
      "make": "Mercedes-Benz",
      "model": "Actros",
      "status": "active",
      "latestLocation": {
        "latitude": 6.5244,
        "longitude": 3.3792,
        "speed": 65,
        "heading": 180,
        "timestamp": "2026-02-10T14:30:00Z",
        "engineStatus": "on"
      }
    }
  ]
}
```

**Notes**:
- Frontend polls this every 15-30 seconds
- Returns only the latest GPS point for each vehicle
- Determines vehicle status based on last update time:
  - Active: Updated within last 5 minutes
  - Idle: Speed = 0, updated recently
  - Offline: No update in 5+ minutes

---

### 3. **Vehicle List API**
**Purpose**: Get all vehicles in the fleet with details

```
GET /api/fleet/vehicles
```

**Response**:
```json
{
  "vehicles": [
    {
      "id": 1,
      "plateNumber": "MUB-001-LA",
      "make": "Mercedes-Benz",
      "model": "Actros",
      "year": 2023,
      "vin": "1HGBH41JXMN109186",
      "deviceId": "GPS-DEVICE-001",
      "status": "active",
      "currentMileage": 15420,
      "fuelCapacity": 400,
      "assignedDriverId": 1,
      "assignedDriver": {
        "id": 1,
        "firstName": "Adebayo",
        "lastName": "Okonkwo"
      }
    }
  ]
}
```

---

### 4. **Add Vehicle API**
**Purpose**: Register a new vehicle in the fleet

```
POST /api/fleet/vehicles
```

**Request Body**:
```json
{
  "plateNumber": "MUB-006-LA",
  "make": "Iveco",
  "model": "Stralis",
  "year": 2023,
  "vin": "6HGBH41JXMN109191",
  "deviceId": "GPS-DEVICE-006",
  "fuelCapacity": 420
}
```

**Response**:
```json
{
  "success": true,
  "vehicle": {
    "id": 6,
    "plateNumber": "MUB-006-LA",
    ...
  }
}
```

---

### 5. **Driver List API**
**Purpose**: Get all drivers with their performance metrics

```
GET /api/fleet/drivers
```

**Response**:
```json
{
  "drivers": [
    {
      "id": 1,
      "firstName": "Adebayo",
      "lastName": "Okonkwo",
      "email": "adebayo@mubraiz.com",
      "phone": "+234 801 234 5678",
      "licenseNumber": "LAG-2024-001",
      "licenseExpiry": "2026-12-31",
      "safetyScore": 95.5,
      "totalTrips": 342,
      "harshBrakingCount": 12,
      "rapidAccelerationCount": 8,
      "overspeedingCount": 5,
      "status": "active"
    }
  ]
}
```

---

### 6. **Add Driver API**
**Purpose**: Register a new driver

```
POST /api/fleet/drivers
```

**Request Body**:
```json
{
  "firstName": "Ngozi",
  "lastName": "Eze",
  "email": "ngozi@mubraiz.com",
  "phone": "+234 806 789 0123",
  "licenseNumber": "LAG-2024-006",
  "licenseExpiry": "2027-08-15"
}
```

**Response**:
```json
{
  "success": true,
  "driver": {
    "id": 6,
    "firstName": "Ngozi",
    "lastName": "Eze",
    "safetyScore": 100,
    ...
  }
}
```

---

### 7. **Alerts API**
**Purpose**: Get recent alerts (overspeeding, geofence breaches, etc.)

```
GET /api/fleet/alerts?limit=10&acknowledged=false
```

**Response**:
```json
{
  "alerts": [
    {
      "id": 1,
      "vehicleId": 2,
      "plateNumber": "MUB-002-LA",
      "type": "overspeeding",
      "severity": "high",
      "message": "Vehicle MUB-002-LA exceeding speed limit at 112 km/h",
      "timestamp": "2026-02-10T14:25:00Z",
      "acknowledged": false,
      "metadata": {
        "speed": 112,
        "speedLimit": 80,
        "location": {
          "lat": 6.5244,
          "lng": 3.3792
        }
      }
    }
  ]
}
```

---

### 8. **Acknowledge Alert API**
**Purpose**: Mark an alert as acknowledged

```
PATCH /api/fleet/alerts/:id/acknowledge
```

**Response**:
```json
{
  "success": true,
  "alert": {
    "id": 1,
    "acknowledged": true,
    "acknowledgedAt": "2026-02-10T14:30:00Z"
  }
}
```

---

## 🔄 Optional but Recommended APIs

### 9. **Historical Route API**
**Purpose**: Get vehicle path history for playback

```
GET /api/fleet/vehicles/:id/history?startDate=2026-02-10T00:00:00Z&endDate=2026-02-10T23:59:59Z
```

**Response**:
```json
{
  "vehicleId": 1,
  "plateNumber": "MUB-001-LA",
  "path": [
    {
      "latitude": 6.5244,
      "longitude": 3.3792,
      "speed": 65,
      "heading": 180,
      "timestamp": "2026-02-10T08:00:00Z"
    },
    {
      "latitude": 6.5268,
      "longitude": 3.3810,
      "speed": 72,
      "heading": 185,
      "timestamp": "2026-02-10T08:00:30Z"
    }
  ]
}
```

---

### 10. **Geofence List API**
**Purpose**: Get all defined geofences

```
GET /api/fleet/geofences
```

**Response**:
```json
{
  "geofences": [
    {
      "id": 1,
      "name": "Lagos Headquarters",
      "type": "circle",
      "coordinates": {
        "lat": 6.5244,
        "lng": 3.3792,
        "radius": 500
      },
      "color": "#a1dc84",
      "alertOnEntry": true,
      "alertOnExit": true,
      "status": "active"
    }
  ]
}
```

---

### 11. **Create Geofence API**
**Purpose**: Define a new geofence zone

```
POST /api/fleet/geofences
```

**Request Body**:
```json
{
  "name": "Apapa Port Zone",
  "type": "circle",
  "coordinates": {
    "lat": 6.4474,
    "lng": 3.3700,
    "radius": 1000
  },
  "alertOnEntry": true,
  "alertOnExit": true
}
```

---

## 📊 Data Flow Architecture

### Real-Time GPS Tracking Flow:
```
GPS Device (in vehicle)
    ↓ (every 10-30 seconds)
POST /api/fleet/gps/ingest
    ↓
Backend stores in database
    ↓
Frontend polls GET /api/fleet/vehicles/live (every 15 seconds)
    ↓
Map updates with new positions
```

### Alert Generation Flow:
```
GPS Data arrives
    ↓
Backend checks rules (speed limits, geofences)
    ↓
If violation detected → Create Alert
    ↓
Frontend fetches GET /api/fleet/alerts
    ↓
Display in alerts panel
```

---

## 🔧 Implementation Requirements

### Backend Technology Stack:
- **Server**: Node.js + Express (or any backend framework)
- **Database**: MySQL, PostgreSQL, or MongoDB
- **Real-time**: WebSockets (optional, for push updates)

### Database Tables Needed:
1. **vehicles** - Vehicle registry
2. **drivers** - Driver profiles
3. **gps_logs** - GPS data points (high volume)
4. **alerts** - Alert records
5. **geofences** - Geofence definitions

### GPS Hardware Integration:
- GPS devices must send data to your backend
- Common protocols: HTTP POST, MQTT, TCP
- Devices need internet connectivity (4G/5G)

---

## 🚀 Minimum Viable APIs (MVP)

To get started with **real GPS tracking**, you only need these 3 APIs:

1. **POST /api/fleet/gps/ingest** - Receive GPS data
2. **GET /api/fleet/vehicles/live** - Get current positions
3. **GET /api/fleet/vehicles** - List all vehicles

Everything else can be added later!

---

## 📡 GPS Device Requirements

Your GPS hardware devices must:
- ✅ Have internet connectivity (4G/5G SIM card)
- ✅ Send HTTP POST requests to your backend
- ✅ Include: deviceId, lat, lng, speed, heading, timestamp
- ✅ Update every 10-30 seconds
- ✅ Have unique device IDs

### Popular GPS Device Brands:
- Teltonika
- Queclink
- Concox
- Ruptela
- Calamp

---

## 🔐 Security Considerations

1. **Authentication**: Validate deviceId before accepting GPS data
2. **Rate Limiting**: Prevent spam from malicious devices
3. **HTTPS**: All APIs must use SSL/TLS
4. **API Keys**: Require authentication tokens
5. **Data Validation**: Verify lat/lng ranges, timestamps

---

## 📈 Scalability Notes

- **GPS Logs**: Can grow to millions of records quickly
- **Indexing**: Index by (vehicleId, timestamp) for fast queries
- **Archiving**: Move old GPS data to cold storage after 90 days
- **Caching**: Cache live positions in Redis for faster reads

---

## ✅ Summary

**Essential APIs for Real-Time Fleet Tracking:**

| API | Method | Purpose | Priority |
|-----|--------|---------|----------|
| GPS Ingestion | POST | Receive GPS data from devices | **Critical** |
| Live Locations | GET | Display vehicles on map | **Critical** |
| Vehicle List | GET | Show all vehicles | **Critical** |
| Add Vehicle | POST | Register new vehicles | High |
| Driver List | GET | Show all drivers | High |
| Add Driver | POST | Register new drivers | High |
| Alerts | GET | Show alerts | High |
| Acknowledge Alert | PATCH | Mark alerts as seen | Medium |
| Historical Route | GET | Route playback | Medium |
| Geofences | GET/POST | Manage zones | Low |

**The frontend is already built and ready** - it just needs these APIs to replace the mock data!

---

**Next Step**: Implement these APIs in your backend, and the Fleet Management system will work with real GPS devices! 🚚📍
