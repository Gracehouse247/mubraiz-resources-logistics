const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Geofence = sequelize.define('Geofence', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('circle', 'polygon'),
        allowNull: false
    },
    coordinates: {
        type: DataTypes.JSON,
        allowNull: false,
        comment: 'For circle: {lat, lng, radius}. For polygon: [{lat, lng}, ...]'
    },
    color: {
        type: DataTypes.STRING(7),
        defaultValue: '#a1dc84'
    },
    alertOnEntry: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    alertOnExit: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active'
    }
}, {
    tableName: 'geofences',
    timestamps: true
});

module.exports = Geofence;
