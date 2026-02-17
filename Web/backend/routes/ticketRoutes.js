const express = require('express');
const { SupportTicket } = require('../models/SupportTicket');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

// Get all tickets
router.get('/', requireAuth(), async (req, res) => {
    try {
        const tickets = await SupportTicket.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json({ tickets });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tickets' });
    }
});

module.exports = router;
