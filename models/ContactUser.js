const mongoose = require('mongoose');
const moment = require('moment');

const contactUserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  phone: String,
  textarea: String,
  createdAt: String
});

contactUserSchema.pre('save', function(next) {
  this.createdAt = moment().format('DD-MM-YYYY');
  next();
});

module.exports = mongoose.model('ContactUser', contactUserSchema);
