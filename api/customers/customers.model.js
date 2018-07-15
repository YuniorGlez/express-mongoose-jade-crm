const mongoose = require('mongoose');

const CUSTOMER = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
})

const model = mongoose.model('customer', CUSTOMER);

module.exports = model;