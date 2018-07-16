const mongoose = require('mongoose');

const CUSTOMER = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  img : String
})

const model = mongoose.model('customer', CUSTOMER);

module.exports = model;