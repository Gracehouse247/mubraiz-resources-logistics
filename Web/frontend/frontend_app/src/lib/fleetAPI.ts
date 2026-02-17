/**
 * Fleet Management API Helper
 * Centralized API calls for the Fleet Management system
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.mubraizresourcesltd.com';

export const fleetAPI = {
    // Live tracking
    getLiveVehicles: async () => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/live`);
        if (!response.ok) throw new Error('Failed to fetch live vehicles');
        return response.json();
    },

    // Vehicles
    getVehicles: async () => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/vehicles`);
        if (!response.ok) throw new Error('Failed to fetch vehicles');
        return response.json();
    },

    addVehicle: async (vehicleData: any) => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/vehicles`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vehicleData)
        });
        if (!response.ok) throw new Error('Failed to add vehicle');
        return response.json();
    },

    // Drivers
    getDrivers: async () => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/drivers`);
        if (!response.ok) throw new Error('Failed to fetch drivers');
        return response.json();
    },

    addDriver: async (driverData: any) => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/drivers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(driverData)
        });
        if (!response.ok) throw new Error('Failed to add driver');
        return response.json();
    },

    // Alerts
    getAlerts: async (acknowledged = false, limit = 10) => {
        const response = await fetch(
            `${API_BASE_URL}/api/fleet/alerts?acknowledged=${acknowledged}&limit=${limit}`
        );
        if (!response.ok) throw new Error('Failed to fetch alerts');
        return response.json();
    },

    acknowledgeAlert: async (alertId: number) => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/alerts/${alertId}/acknowledge`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) throw new Error('Failed to acknowledge alert');
        return response.json();
    },

    // Historical data
    getVehicleHistory: async (vehicleId: number, startDate: string, endDate: string) => {
        const response = await fetch(
            `${API_BASE_URL}/api/fleet/history/${vehicleId}?startDate=${startDate}&endDate=${endDate}`
        );
        if (!response.ok) throw new Error('Failed to fetch vehicle history');
        return response.json();
    },

    // Geofences
    getGeofences: async () => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/geofences`);
        if (!response.ok) throw new Error('Failed to fetch geofences');
        return response.json();
    },

    createGeofence: async (geofenceData: any) => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/geofences`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(geofenceData)
        });
        if (!response.ok) throw new Error('Failed to create geofence');
        return response.json();
    },

    // GPS Ingestion (for testing)
    ingestGPSData: async (gpsData: any) => {
        const response = await fetch(`${API_BASE_URL}/api/fleet/ingest`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gpsData)
        });
        if (!response.ok) throw new Error('Failed to ingest GPS data');
        return response.json();
    }
};
