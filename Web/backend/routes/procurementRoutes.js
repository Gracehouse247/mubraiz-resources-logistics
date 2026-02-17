const express = require('express');
const { ProcurementRequest } = require('../models/ProcurementRequest');
const { requireAuth } = require('../middleware/authMiddleware');
const { sendEmail, formatProcurementBriefEmail } = require('../utils/emailService');

const router = express.Router();

// Public: Submit a quote request
router.post('/request', async (req, res) => {
    try {
        const newRequest = await ProcurementRequest.create(req.body);

        // Send email notification
        const emailData = formatProcurementBriefEmail(req.body);
        await sendEmail(emailData);

        res.status(201).json({
            message: 'Quote request submitted successfully',
            requestId: newRequest.id
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Admin: Get all requests
router.get('/all', requireAuth(), async (req, res) => {
    try {
        const requests = await ProcurementRequest.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch requests' });
    }
});

// Admin: Update request status
router.patch('/:id/status', requireAuth(), async (req, res) => {
    try {
        const request = await ProcurementRequest.findByPk(req.params.id);
        if (!request) return res.status(404).json({ error: 'Request not found' });

        request.status = req.body.status;
        await request.save();
        res.json({ message: 'Status updated', request });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
