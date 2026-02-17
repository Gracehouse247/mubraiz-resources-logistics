const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    senderId: {
        type: DataTypes.STRING, // Clerk User ID
        allowNull: false
    },
    senderName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recipientId: {
        type: DataTypes.STRING, // Could be 'admin_room' or specific user
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('text', 'file', 'system'),
        defaultValue: 'text'
    },
    status: {
        type: DataTypes.ENUM('sent', 'delivered', 'read'),
        defaultValue: 'sent'
    }
}, {
    timestamps: true
});

module.exports = Message;
