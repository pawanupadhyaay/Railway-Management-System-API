const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const Train = require('./Train');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bookingTime: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

User.hasMany(Booking);
Booking.belongsTo(User);

Train.hasMany(Booking);
Booking.belongsTo(Train);

module.exports = Booking;
