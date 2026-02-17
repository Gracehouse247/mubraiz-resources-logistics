const express = require('express');
const multer = require('multer');
const path = require('path');
const Asset = require('../models/Asset');
const { requireAuth } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');

const router = express.Router();

// Configure local storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/assets/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
});

// Upload Asset
router.post('/upload', requireAuth(), upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const asset = await Asset.create({
            fileName: req.file.filename,
            originalName: req.file.originalname,
            filePath: req.file.path,
            mimeType: req.file.mimetype,
            size: req.file.size,
            category: req.body.category || 'general',
            uploadedBy: req.auth.userId,
            accessLevel: req.body.accessLevel || 'internal'
        });

        res.status(201).json({ success: true, asset });
    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ error: 'Failed to upload asset' });
    }
});

// Get all assets (Admin Only)
router.get('/', requireAuth(), checkRole(['super_admin', 'executive', 'fleet_manager']), async (req, res) => {
    try {
        const assets = await Asset.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json({ assets });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch assets' });
    }
});

module.exports = router;
