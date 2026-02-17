const express = require('express');
const { Vendor } = require('../models/Vendor');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

// Vendor: Submit Application
router.post('/apply', async (req, res) => {
    try {
        const { companyName, email, phone, industry, documents } = req.body;

        const existing = await Vendor.findOne({ where: { email } });
        if (existing) {
            return res.status(400).json({ error: 'Application with this email already exists' });
        }

        const vendor = await Vendor.create({
            companyName, email, phone, industry, documents: documents || []
        });

        res.status(201).json({ message: 'Application submitted successfully', id: vendor.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Admin: List all vendors
router.get('/', requireAuth(), async (req, res) => {
    try {
        const vendors = await Vendor.findAll();
        res.json(vendors);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Admin: Approve/Reject Vendor
router.patch('/:id/status', requireAuth(), async (req, res) => {
    try {
        const { status } = req.body;
        const vendor = await Vendor.findByPk(req.params.id);

        if (!vendor) return res.status(404).json({ error: 'Vendor not found' });

        vendor.status = status;
        await vendor.save();

        res.json({ message: `Vendor ${status}`, vendor });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
