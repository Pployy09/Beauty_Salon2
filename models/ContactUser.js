const mongoose = require('mongoose');

const contactUserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  email: String,
  phone: String,
  textarea: String,
});

module.exports = mongoose.model('ContactUser', contactUserSchema);
