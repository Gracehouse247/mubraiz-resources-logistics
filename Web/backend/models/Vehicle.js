const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Vehicle = sequelize.define('Vehicle', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    plateNumber: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    make: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    model: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER
    },
    vin: {
        type: DataTypes.STRING(17),
        unique: true
    },
    deviceId: {
        type: DataTypes.STRING(50),
        unique: true,
        comment: 'GPS tracker device identifier'
    },
    status: {
        type: DataTypes.ENUM('active', 'idle', 'maintenance', 'offline'),
        defaultValue: 'offline'
    },
    fuelCapacity: {
        type: DataTypes.DECIMAL(10, 2),
        comment: 'Fuel tank capacity in liters'
    },
    currentMileage: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    lastServiceMileage: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
    },
    nextServiceDue: {
        type: DataTypes.DATE
    },
    assignedDriverId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'vehicles',
    timestamps: true
});

module.exports = Vehicle;
