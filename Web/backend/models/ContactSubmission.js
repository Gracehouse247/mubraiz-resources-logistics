const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const ContactSubmission = sequelize.define('ContactSubmission', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    serviceType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('New', 'Read', 'Replied', 'Archived'),
        defaultValue: 'New'
    }
}, {
    tableName: 'contact_submissions',
    timestamps: true
});

module.exports = { ContactSubmission };
