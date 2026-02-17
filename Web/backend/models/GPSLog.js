const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const GPSLog = sequelize.define('GPSLog', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    vehicleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'vehicles',
            key: 'id'
        }
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: false
    },
    longitude: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: false
    },
    speed: {
        type: DataTypes.DECIMAL(6, 2),
        comment: 'Speed in km/h'
    },
    heading: {
        type: DataTypes.DECIMAL(5, 2),
        comment: 'Direction in degrees (0-360)'
    },
    altitude: {
        type: DataTypes.DECIMAL(8, 2),
        comment: 'Altitude in meters'
    },
    fuelLevel: {
        type: DataTypes.DECIMAL(5, 2),
        comment: 'Fuel level percentage'
    },
    engineStatus: {
        type: DataTypes.ENUM('on', 'off', 'idle'),
        defaultValue: 'off'
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    accuracy: {
        type: DataTypes.DECIMAL(6, 2),
        comment: 'GPS accuracy in meters'
    }
}, {
    tableName: 'gps_logs',
    timestamps: false,
    indexes: [
        {
            fields: ['vehicleId', 'timestamp']
        },
        {
            fields: ['timestamp']
        }
    ]
});

module.exports = GPSLog;
