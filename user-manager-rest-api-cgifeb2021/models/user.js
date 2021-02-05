const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('./mongo');

const User = new mongoose.Schema({
  userId: Number,
  name: String,
  phoneNo: String,
  email: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
  updatedBy: String,
  updatedOn: { type: Date, default: Date.now }
});

User.plugin(autoIncrement.plugin, { model: 'User', field: 'userId', startAt: 1 });
module.exports = mongoose.model('User', User);