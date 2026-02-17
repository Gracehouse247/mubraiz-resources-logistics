/**
 * Trade & Client API Helper
 * Centralized API calls for Shipments and Client Portal
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.mubraizresourcesltd.com';

export const tradeAPI = {
    // Shipments
    getShipment: async (trackingId: string) => {
        const response = await fetch(`${API_BASE_URL}/api/shipments/${encodeURIComponent(trackingId)}`);
        if (!response.ok) throw new Error('Shipment not found');
        return response.json();
    },

    // Client Dashboard
    getDashboardStats: async () => {
        const response = await fetch(`${API_BASE_URL}/api/client/dashboard?userId=demo`);
        if (!response.ok) throw new Error('Failed to fetch dashboard stats');
        return response.json();
    },

    // Admin Dashboard
    getAdminOverview: async () => {
        const response = await fetch(`${API_BASE_URL}/api/admin/overview`);
        if (!response.ok) throw new Error('Failed to fetch admin overview');
        return response.json();
    },

    // Partners
    getPartners: async () => {
        // Assuming /api/vendors returns all, we might want to filter on frontend or add query param
        const response = await fetch(`${API_BASE_URL}/api/vendors?status=Approved`);
        if (!response.ok) throw new Error('Failed to fetch partners');
        return response.json();
    }
};
