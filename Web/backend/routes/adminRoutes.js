const express = require('express');
const { Shipment } = require('../models/Shipment');
const Vehicle = require('../models/Vehicle');
const { Vendor } = require('../models/Vendor');
const { Invoice } = require('../models/Invoice');
const Alert = require('../models/Alert');
const { ProcurementRequest } = require('../models/ProcurementRequest');
const { ContactSubmission } = require('../models/ContactSubmission');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

const { checkRole } = require('../middleware/roleMiddleware');

// Get Admin Dashboard Overview
router.get('/overview', requireAuth(), checkRole(['super_admin', 'executive', 'fleet_manager']), async (req, res) => {
    try {
        const userRole = req.auth?.sessionClaims?.metadata?.role || 'user';

        // Parallel data fetching
        const [
            shipments,
            vehicles,
            invoices,
            alerts,
            procurements,
            contacts
        ] = await Promise.all([
            Shipment.findAll(),
            Vehicle.findAll(),
            Invoice.findAll(),
            Alert.findAll({ limit: 5, order: [['createdAt', 'DESC']] }),
            ProcurementRequest.findAll({ order: [['createdAt', 'DESC']] }),
            ContactSubmission.findAll({ order: [['createdAt', 'DESC']] })
        ]);

        // Basic KPI Metrics
        const activeShipments = shipments.filter(s => s.status !== 'Delivered').length;
        const onTimeShipments = shipments.filter(s => s.status !== 'Delayed').length;
        const onTimeRate = shipments.length > 0 ? ((onTimeShipments / shipments.length) * 100).toFixed(1) : 100;

        const activeVehicles = vehicles.filter(v => v.status === 'Active').length;
        const totalVehicles = vehicles.length;

        // Executive Only Data
        let totalRevenue = 'ACCESS_RESTRICTED';
        if (['super_admin', 'executive'].includes(userRole)) {
            const revenueValue = invoices.reduce((acc, inv) => acc + parseFloat(inv.amount), 0);
            totalRevenue = `$${(revenueValue / 1000).toFixed(1)}K`;
        }

        const newLeads = procurements.filter(p => p.status === 'New').length;
        const newMessages = contacts.filter(c => c.status === 'New').length;

        // Corridor Analytics Synthesis
        const corridors = [
            {
                name: "Lagos - Kano Corridor",
                yield: `$${(shipments.filter(s => s.origin.includes('Lagos') && s.destination.includes('Kano')).length * 45).toFixed(1)}K`,
                health: "Optimal",
                performance: 95
            },
            {
                name: "Atlantic Maritime Hub",
                yield: `$${(shipments.filter(s => s.status === 'Customs').length * 120).toFixed(1)}K`,
                health: "Optimal",
                performance: 92
            },
            {
                name: "Trans-African Node",
                yield: `$${(shipments.filter(s => s.status === 'Delayed').length * 15).toFixed(1)}K`,
                health: shipments.some(s => s.status === 'Delayed') ? "Risk Alert" : "Optimal",
                performance: 68
            },
        ];

        res.json({
            kpi: {
                activeShipments,
                onTimeRate: `${onTimeRate}%`,
                fleetUtil: `${activeVehicles}/${totalVehicles}`,
                revenueYC: totalRevenue,
                newLeads,
                newMessages
            },
            kanban: kanbanData,
            recentAlerts: alerts,
            procurementLeads: procurements,
            contactMessages: contacts,
            corridors // Transmitting dynamic corridor data
        });
    } catch (error) {
        console.error('Admin Overview Error:', error);
        res.status(500).json({ error: 'Failed to fetch admin dashboard data' });
    }
});

/**
 * Trigger Global SEO Synchronization
 * Pings Google Search Console and LLM Crawlers
 */
const seoAutomation = require('../utils/seoAutomation');
router.post('/seo-sync', requireAuth(), checkRole(['super_admin', 'executive']), async (req, res) => {
    try {
        const { url, type } = req.body; // Individual URL or global sync

        if (url) {
            // Sync specific URL
            const result = await seoAutomation.notifyGoogle(url, type || 'URL_UPDATED');
            return res.json({ message: `Sync started for ${url}`, result });
        }

        // Global Sync (Ping Sitemap)
        const pingResults = await seoAutomation.pingSearchEngines();
        const llmResults = await seoAutomation.notifyLLMs();

        res.json({
            message: 'Global SEO Synchronization triggered successfully',
            pingResults,
            llmResults
        });
    } catch (error) {
        console.error('SEO Sync Error:', error);
        res.status(500).json({ error: 'SEO Synchronization failed', detail: error.message });
    }
});

module.exports = router;
