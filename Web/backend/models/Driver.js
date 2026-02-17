const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Driver = sequelize.define('Driver', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true
    },
    phone: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    licenseNumber: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    licenseExpiry: {
        type: DataTypes.DATE,
        allowNull: false
    },
    safetyScore: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 100.00,
        comment: 'AI-calculated safety score (0-100)'
    },
    totalTrips: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    harshBrakingCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    rapidAccelerationCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    overspeedingCount: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'suspended'),
        defaultValue: 'active'
    }
}, {
    tableName: 'drivers',
    timestamps: true
});

module.exports = Driver;
