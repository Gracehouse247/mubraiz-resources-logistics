const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Asset = sequelize.define('Asset', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    fileName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    originalName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    filePath: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mimeType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        defaultValue: 'general'
    },
    uploadedBy: {
        type: DataTypes.STRING, // Clerk User ID
        allowNull: false
    },
    accessLevel: {
        type: DataTypes.ENUM('public', 'internal', 'private'),
        defaultValue: 'internal'
    }
}, {
    timestamps: true
});

module.exports = Asset;
