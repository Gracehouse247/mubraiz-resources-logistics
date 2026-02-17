const express = require('express');
const { ContactSubmission } = require('../models/ContactSubmission');
const { requireAuth } = require('../middleware/authMiddleware');
const {
    sendEmail,
    formatContactEmail,
    formatTradeAuditEmail,
    formatAssetInquiryEmail,
    formatFleetDeploymentEmail,
    formatQuoteEmail,
    formatSiteVisitEmail,
    formatCorridorAuditEmail,
    formatFacilityBriefEmail,
    formatCustomsAssessmentEmail
} = require('../utils/emailService');

const router = express.Router();

// Public: Submit a contact form
router.post('/submit', async (req, res) => {
    try {
        const { fullName, email, serviceType, message } = req.body;

        if (!fullName || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const submission = await ContactSubmission.create({
            fullName,
            email,
            serviceType,
            message
        });

        // Send email notification
        const emailData = formatContactEmail({ fullName, email, serviceType, message });
        await sendEmail(emailData);

        res.status(201).json({
            message: 'Message sent successfully. Our team will contact you shortly.',
            submissionId: submission.id
        });
    } catch (error) {
        console.error('Contact Submission Error:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

// Public: Submit trade audit request
router.post('/trade-audit', async (req, res) => {
    try {
        const { sector, destination, volume } = req.body;

        if (!sector || !destination) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email notification
        const emailData = formatTradeAuditEmail({ sector, destination, volume });
        await sendEmail(emailData);

        res.status(201).json({
            message: 'Trade audit request submitted successfully.',
            reference: `#${Math.random().toString(36).substring(2, 9).toUpperCase()}-NODE`
        });
    } catch (error) {
        console.error('Trade Audit Submission Error:', error);
        res.status(500).json({ error: 'Failed to submit trade audit request.' });
    }
});

// Public: Submit asset inquiry
router.post('/asset-inquiry', async (req, res) => {
    try {
        const { assetName, company, location, summary } = req.body;

        if (!assetName || !company || !location || !summary) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email notification
        const emailData = formatAssetInquiryEmail({ assetName, company, location, summary });
        await sendEmail(emailData);

        res.status(201).json({
            message: 'Asset inquiry submitted successfully.',
            reference: `#FLX-${Math.floor(10000 + Math.random() * 90000)}-Z`
        });
    } catch (error) {
        console.error('Asset Inquiry Submission Error:', error);
        res.status(500).json({ error: 'Failed to submit asset inquiry.' });
    }
});

// Public: Submit fleet deployment request
router.post('/fleet-deployment', async (req, res) => {
    try {
        const { asset, location } = req.body;

        if (!asset || !location) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email notification
        const emailData = formatFleetDeploymentEmail({ asset, location });
        await sendEmail(emailData);

        res.status(201).json({
            message: 'Fleet deployment request submitted successfully.',
            reference: `#OPS-${(Math.random() * 9999).toFixed(0)}-H`
        });
    } catch (error) {
        console.error('Fleet Deployment Submission Error:', error);
        res.status(500).json({ error: 'Failed to submit fleet deployment request.' });
    }
});

// Public: Submit quote request
router.post('/quote', async (req, res) => {
    try {
        const { name, email, phone, cargoType, origin, destination, weight, details } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email notification
        const emailData = formatQuoteEmail({ name, email, phone, cargoType, origin, destination, weight, details });
        await sendEmail(emailData);

        res.status(201).json({
            message: 'Quote request submitted successfully. We will contact you shortly.',
            reference: `#QT-${Math.floor(1000 + Math.random() * 9000)}`
        });
    } catch (error) {
        console.error('Quote Request Submission Error:', error);
        res.status(500).json({ error: 'Failed to submit quote request.' });
    }
});

// Public: Submit site visit request
router.post('/site-visit', async (req, res) => {
    try {
        const { name, email, phone, company, preferredDate, requirements } = req.body;

        if (!name || !email) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email notification
        const emailData = formatSiteVisitEmail({ name, email, phone, company, preferredDate, requirements });
        await sendEmail(emailData);

        res.status(201).json({
            message: 'Site visit request submitted successfully. We will contact you to confirm.',
            reference: `#SV-${Math.floor(1000 + Math.random() * 9000)}`
        });
    } catch (error) {
        console.error('Site Visit Request Submission Error:', error);
        res.status(500).json({ error: 'Failed to submit site visit request.' });
    }
});

// Public: Submit haulage corridor audit
router.post('/haulage-audit', async (req, res) => {
    try {
        const { origin, destination } = req.body;

        if (!origin || !destination) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email notification
        const emailData = formatCorridorAuditEmail({ origin, destination });
        await sendEmail(emailData);

        res.status(201).json({
            message: 'Logistics audit protocol executed successfully.',
            reference: `#TRZ-${Math.floor(1000 + Math.random() * 9000)}-L`
        });
    } catch (error) {
        console.error('Haulage Audit Error:', error);
        res.status(500).json({ error: 'Failed to execute audit protocol.' });
    }
});

// Public: Submit warehousing facility brief
router.post('/warehousing-brief', async (req, res) => {
    try {
        const { category, requirements } = req.body;

        if (!category || !requirements) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email notification
        const emailData = formatFacilityBriefEmail({ category, requirements });
        await sendEmail(emailData);

        res.status(201).json({
            message: 'Facility brief dispatched successfully.',
            reference: `#FAC-${Math.floor(1000 + Math.random() * 9000)}-QT`
        });
    } catch (error) {
        console.error('Warehousing Brief Error:', error);
        res.status(500).json({ error: 'Failed to dispatch facility brief.' });
    }
});

// Public: Submit customs assessment
router.post('/customs-assessment', async (req, res) => {
    try {
        const { category, value } = req.body;

        if (!category || !value) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Send email notification
        const emailData = formatCustomsAssessmentEmail({ category, value });
        await sendEmail(emailData);

        res.status(201).json({
            message: 'Customs assessment submitted successfully.',
            reference: `#REG-${Math.floor(1000 + Math.random() * 9000)}-C`
        });
    } catch (error) {
        console.error('Customs Assessment Error:', error);
        res.status(500).json({ error: 'Failed to submit customs assessment.' });
    }
});

// Admin: Get all submissions
router.get('/all', requireAuth(), async (req, res) => {
    try {
        const submissions = await ContactSubmission.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contact submissions' });
    }
});

module.exports = router;
