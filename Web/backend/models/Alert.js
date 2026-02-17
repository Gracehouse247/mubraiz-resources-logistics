const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Alert = sequelize.define('Alert', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    vehicleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM(
            'overspeeding', 'geofence_entry', 'geofence_exit', 'harsh_braking',
            'rapid_acceleration', 'power_cut', 'sos', 'vibration', 'fuel_theft',
            'idle_excessive', 'maintenance_due', 'low_fuel', 'engine_immobilized'
        ),
        allowNull: false
    },
    severity: {
        type: DataTypes.ENUM('low', 'medium', 'high', 'critical'),
        defaultValue: 'medium'
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    metadata: {
        type: DataTypes.JSON,
        comment: 'Additional context (speed, location, geofence name, etc.)'
    },
    acknowledged: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    acknowledgedBy: {
        type: DataTypes.STRING(100)
    },
    acknowledgedAt: {
        type: DataTypes.DATE
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'alerts',
    timestamps: false,
    indexes: [
        {
            fields: ['vehicleId', 'timestamp']
        },
        {
            fields: ['acknowledged']
        }
    ]
});

module.exports = Alert;
