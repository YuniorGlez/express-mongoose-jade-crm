const mongoose = require('mongoose');

const USER = new mongoose.Schema({
  profile: Object,
  provider: String,
  provider_id: Number
})

const model = mongoose.model('user', USER);

module.exports = model;