# Integrating Real APIs into Fleet Management Frontend

## Quick Integration Guide

This guide shows **exactly what to change** in the frontend code to switch from mock data to real backend APIs.

---

## 🔄 Step 1: Update Fleet Dashboard (`/portal/fleet/page.tsx`)

### Current Code (Mock Data):
```typescript
const [vehicles, setVehicles] = useState(generateMockVehicles());

useEffect(() => {
    // Simulate vehicle movement every 15 seconds
    const interval = setInterval(() => {
        setVehicles(prevVehicles => {
            // Mock simulation logic...
        });
    }, 15000);
}, []);
```

### Replace With (Real API):
```typescript
const [vehicles, setVehicles] = useState([]);

useEffect(() => {
    // Fetch live vehicle data every 15 seconds
    const fetchLiveData = async () => {
        try {
            const response = await fetch('https://your-backend.com/api/fleet/vehicles/live');
            const data = await response.json();
            setVehicles(data.vehicles);
        } catch (error) {
            console.error('Failed to fetch live data:', error);
        }
    };

    // Initial fetch
    fetchLiveData();

    // Poll every 15 seconds
    const interval = setInterval(fetchLiveData, 15000);

    return () => clearInterval(interval);
}, []);
```

---

## 🔄 Step 2: Update Alerts (`/portal/fleet/page.tsx`)

### Current Code (Mock Data):
```typescript
const [alerts, setAlerts] = useState([
    {
        id: 1,
        vehicleId: 2,
        // ... mock alert data
    }
]);
```

### Replace With (Real API):
```typescript
const [alerts, setAlerts] = useState([]);

useEffect(() => {
    const fetchAlerts = async () => {
        try {
            const response = await fetch('https://your-backend.com/api/fleet/alerts?acknowledged=false&limit=10');
            const data = await response.json();
            setAlerts(data.alerts);
        } catch (error) {
            console.error('Failed to fetch alerts:', error);
        }
    };

    fetchAlerts();
    const interval = setInterval(fetchAlerts, 30000); // Every 30 seconds

    return () => clearInterval(interval);
}, []);

const acknowledgeAlert = async (alertId: number) => {
    try {
        await fetch(`https://your-backend.com/api/fleet/alerts/${alertId}/acknowledge`, {
            method: 'PATCH'
        });
        setAlerts(prev => prev.map(alert => 
            alert.id === alertId ? { ...alert, acknowledged: true } : alert
        ));
    } catch (error) {
        console.error('Failed to acknowledge alert:', error);
    }
};
```

---

## 🔄 Step 3: Update Vehicle Management (`/portal/fleet/vehicles/page.tsx`)

### Current Code (Mock Data):
```typescript
const [vehicles, setVehicles] = useState(mockVehicles);

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVehicle = {
        id: vehicles.length + 1,
        ...formData
    };
    setVehicles([...vehicles, newVehicle]);
};
```

### Replace With (Real API):
```typescript
const [vehicles, setVehicles] = useState([]);

useEffect(() => {
    const fetchVehicles = async () => {
        try {
            const response = await fetch('https://your-backend.com/api/fleet/vehicles');
            const data = await response.json();
            setVehicles(data.vehicles);
        } catch (error) {
            console.error('Failed to fetch vehicles:', error);
        }
    };
    fetchVehicles();
}, []);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const response = await fetch('https://your-backend.com/api/fleet/vehicles', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (data.success) {
            setVehicles([...vehicles, data.vehicle]);
            setShowAddModal(false);
            setFormData({ /* reset */ });
        }
    } catch (error) {
        console.error('Failed to add vehicle:', error);
    }
};
```

---

## 🔄 Step 4: Update Driver Management (`/portal/fleet/drivers/page.tsx`)

### Current Code (Mock Data):
```typescript
const [drivers, setDrivers] = useState(mockDrivers);

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDriver = {
        id: drivers.length + 1,
        ...formData,
        safetyScore: 100
    };
    setDrivers([...drivers, newDriver]);
};
```

### Replace With (Real API):
```typescript
const [drivers, setDrivers] = useState([]);

useEffect(() => {
    const fetchDrivers = async () => {
        try {
            const response = await fetch('https://your-backend.com/api/fleet/drivers');
            const data = await response.json();
            setDrivers(data.drivers);
        } catch (error) {
            console.error('Failed to fetch drivers:', error);
        }
    };
    fetchDrivers();
}, []);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const response = await fetch('https://your-backend.com/api/fleet/drivers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (data.success) {
            setDrivers([...drivers, data.driver]);
            setShowAddModal(false);
            setFormData({ /* reset */ });
        }
    } catch (error) {
        console.error('Failed to add driver:', error);
    }
};
```

---

## 🔧 Step 5: Create API Configuration File

Create `src/lib/api.ts`:

```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const fleetAPI = {
    // Live tracking
    getLiveVehicles: async () => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/vehicles/live`);
        return response.json();
    },

    // Vehicles
    getVehicles: async () => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/vehicles`);
        return response.json();
    },

    addVehicle: async (vehicleData: any) => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/vehicles`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vehicleData)
        });
        return response.json();
    },

    // Drivers
    getDrivers: async () => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/drivers`);
        return response.json();
    },

    addDriver: async (driverData: any) => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/drivers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(driverData)
        });
        return response.json();
    },

    // Alerts
    getAlerts: async (acknowledged = false, limit = 10) => {
        const response = await fetch(
            `${API_BASE_URL}/api/fleet/alerts?acknowledged=${acknowledged}&limit=${limit}`
        );
        return response.json();
    },

    acknowledgeAlert: async (alertId: number) => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/alerts/${alertId}/acknowledge`, {
            method: 'PATCH'
        });
        return response.json();
    },

    // Historical data
    getVehicleHistory: async (vehicleId: number, startDate: string, endDate: string) => {
        const response = await fetch(
            `${API_BASE_URL}/api/fleet/vehicles/${vehicleId}/history?startDate=${startDate}&endDate=${endDate}`
        );
        return response.json();
    },

    // Geofences
    getGeofences: async () => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/geofences`);
        return response.json();
    },

    createGeofence: async (geofenceData: any) => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/geofences`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(geofenceData)
        });
        return response.json();
    }
};
```

---

## 🔧 Step 6: Update Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_API_URL=https://your-backend.com
```

For development:
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

## 📝 Step 7: Use the API Helper

Update your components to use the API helper:

```typescript
import { fleetAPI } from '@/lib/api';

// In your component
useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fleetAPI.getLiveVehicles();
            setVehicles(data.vehicles);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
}, []);
```

---

## 🚀 Complete Example: Updated Fleet Dashboard

Here's the complete updated version of the fleet dashboard with real APIs:

```typescript
"use client";

import { useState, useEffect } from "react";
import { fleetAPI } from "@/lib/api";
import dynamic from "next/dynamic";

const FleetMap = dynamic(() => import("@/components/fleet/FleetMap"), {
    ssr: false,
    loading: () => <div className="h-full bg-slate-100 animate-pulse rounded-3xl"></div>
});

export default function FleetDashboardPage() {
    const [vehicles, setVehicles] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        active: 0,
        idle: 0,
        offline: 0,
        total: 0
    });

    // Fetch live vehicle data
    useEffect(() => {
        const fetchLiveData = async () => {
            try {
                const data = await fleetAPI.getLiveVehicles();
                setVehicles(data.vehicles);
                updateStats(data.vehicles);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch live data:', error);
                setLoading(false);
            }
        };

        fetchLiveData();
        const interval = setInterval(fetchLiveData, 15000);
        return () => clearInterval(interval);
    }, []);

    // Fetch alerts
    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const data = await fleetAPI.getAlerts(false, 10);
                setAlerts(data.alerts);
            } catch (error) {
                console.error('Failed to fetch alerts:', error);
            }
        };

        fetchAlerts();
        const interval = setInterval(fetchAlerts, 30000);
        return () => clearInterval(interval);
    }, []);

    const updateStats = (vehicleList: any[]) => {
        setStats({
            active: vehicleList.filter(v => v.status === 'active').length,
            idle: vehicleList.filter(v => v.status === 'idle').length,
            offline: vehicleList.filter(v => v.status === 'offline').length,
            total: vehicleList.length
        });
    };

    const acknowledgeAlert = async (alertId: number) => {
        try {
            await fleetAPI.acknowledgeAlert(alertId);
            setAlerts(prev => prev.map(alert => 
                alert.id === alertId ? { ...alert, acknowledged: true } : alert
            ));
        } catch (error) {
            console.error('Failed to acknowledge alert:', error);
        }
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">
            <div className="text-xl font-bold">Loading fleet data...</div>
        </div>;
    }

    // ... rest of your component JSX remains the same
}
```

---

## ✅ Summary of Changes

| File | What to Change | Why |
|------|---------------|-----|
| `/portal/fleet/page.tsx` | Replace mock data with API calls | Get real-time GPS data |
| `/portal/fleet/vehicles/page.tsx` | Replace mock vehicles with API | Manage real vehicles |
| `/portal/fleet/drivers/page.tsx` | Replace mock drivers with API | Manage real drivers |
| `src/lib/api.ts` | Create API helper | Centralize API calls |
| `.env.local` | Add API URL | Configure backend endpoint |

---

## 🎯 Testing Checklist

Once you implement the backend APIs:

- [ ] Live map shows real vehicle positions
- [ ] Vehicles update every 15 seconds
- [ ] Adding a vehicle saves to database
- [ ] Adding a driver saves to database
- [ ] Alerts appear when rules are violated
- [ ] Acknowledging alerts updates database
- [ ] Stats (active/idle/offline) are accurate

---

## 🔌 GPS Device Integration

Your GPS devices should send data like this:

```javascript
// Example: GPS device sending data every 30 seconds
setInterval(async () => {
    const gpsData = {
        deviceId: "GPS-DEVICE-001",
        latitude: getCurrentLatitude(),
        longitude: getCurrentLongitude(),
        speed: getCurrentSpeed(),
        heading: getCurrentHeading(),
        timestamp: new Date().toISOString(),
        fuelLevel: getFuelLevel(),
        engineStatus: getEngineStatus()
    };

    await fetch('https://your-backend.com/api/fleet/gps/ingest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gpsData)
    });
}, 30000);
```

---

**That's it!** The frontend is already built and styled. Just connect these APIs and you'll have a fully functional real-time fleet tracking system! 🚚📍
