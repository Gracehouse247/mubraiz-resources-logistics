const express = require('express');
const { Invoice } = require('../models/Invoice');
const { SupportTicket } = require('../models/SupportTicket');
const { Shipment } = require('../models/Shipment');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

// Get Client Dashboard Stats (Invoices, Shipments, Tickets)
router.get('/dashboard', requireAuth(), async (req, res) => {
    try {
        // In a real app, you filter by req.auth.userId.
        // For now, we return all or default to a demo user.
        const invoices = await Invoice.findAll();
        const tickets = await SupportTicket.findAll();
        const shipments = await Shipment.findAll();

        const pendingInvoices = invoices.filter(i => i.status === 'Pending');
        const totalPending = pendingInvoices.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

        const openTickets = tickets.filter(t => t.status === 'Open' || t.status === 'In-Progress');

        res.json({
            stats: {
                activeShipments: shipments.filter(s => s.status !== 'Delivered').length,
                pendingAmount: totalPending,
                openTickets: openTickets.length
            },
            invoices: invoices.slice(0, 5), // Recent 5
            shipments: shipments.slice(0, 5) // Recent 5
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// List All Invoices
router.get('/invoices', requireAuth(), async (req, res) => {
    try {
        const invoices = await Invoice.findAll({ order: [['dueDate', 'ASC']] });
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// List All Tickets
router.get('/tickets', requireAuth(), async (req, res) => {
    try {
        const tickets = await SupportTicket.findAll();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Create New Ticket
router.post('/tickets', requireAuth(), async (req, res) => {
    try {
        const { subject, priority, description } = req.body;
        const newTicket = await SupportTicket.create({
            ticketNumber: `TKT-${Math.floor(Math.random() * 10000)}`,
            subject,
            priority,
            status: 'Open',
            // description is not in model yet, but could be added
        });
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
