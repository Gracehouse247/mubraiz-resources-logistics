const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const ProcurementRequest = sequelize.define('ProcurementRequest', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    serviceType: {
        type: DataTypes.ENUM('Strategic Sourcing', 'Inventory Orchestration', 'Vendor Management', 'Risk & Compliance', 'Direct Procurement'),
        allowNull: false
    },
    estimatedBudget: {
        type: DataTypes.STRING,
        allowNull: true
    },
    projectDescription: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('New', 'Reviewed', 'In-Progress', 'Quote-Sent', 'Closed'),
        defaultValue: 'New'
    }
}, {
    timestamps: true
});

module.exports = { ProcurementRequest };
