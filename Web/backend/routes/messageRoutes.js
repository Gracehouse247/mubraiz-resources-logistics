const express = require('express');
const Message = require('../models/Message');
const { requireAuth } = require('../middleware/authMiddleware');
const { Op } = require('sequelize');

const router = express.Router();

// Get chat history for a user
router.get('/history/:recipientId', requireAuth(), async (req, res) => {
    try {
        const { recipientId } = req.params;
        const userId = req.auth.userId;

        const messages = await Message.findAll({
            where: {
                [Op.or]: [
                    { senderId: userId, recipientId: recipientId },
                    { senderId: recipientId, recipientId: userId },
                    { recipientId: 'admin_room' } // Admins can see all support
                ]
            },
            order: [['createdAt', 'ASC']],
            limit: 100
        });

        res.json({ messages });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

module.exports = router;
