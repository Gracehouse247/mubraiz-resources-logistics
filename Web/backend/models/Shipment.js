const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Shipment = sequelize.define('Shipment', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    origin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clientName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Booked', 'In-Transit', 'Customs', 'Delivered', 'Delayed'),
        defaultValue: 'Booked'
    },
    currentLocation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telemetryLogs: {
        type: DataTypes.JSON,
        defaultValue: []
    },
    estimatedDelivery: {
        type: DataTypes.DATE,
        allowNull: false
    },
    // Telemetry & Vessel Info
    vesselName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imoNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mmsi: {
        type: DataTypes.STRING,
        allowNull: true
    },
    speed: {
        type: DataTypes.FLOAT, // in knots
        allowNull: true
    },
    heading: {
        type: DataTypes.FLOAT, // degrees
        allowNull: true
    },
    seaState: {
        type: DataTypes.STRING,
        allowNull: true
    },
    satelliteStatus: {
        type: DataTypes.STRING,
        defaultValue: 'ACTIVE (L-BAND)'
    },
    // Relations
    clientId: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
});

module.exports = { Shipment };
