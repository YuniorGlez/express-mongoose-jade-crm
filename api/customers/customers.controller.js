const CUSTOMER = require('./customers.model');

module.exports = { getAll, getOne, create, remove, update };

function getAll(req, res) {
  CUSTOMER.find()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    })
}
function getOne(req, res) {
  CUSTOMER.findById(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    })
}
function create(req, res) {
  CUSTOMER.create(req.body)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    })
}
function remove(req, res) {
  CUSTOMER.findByIdAndRemove(req.params.id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    })
}
function update(req, res) {
  CUSTOMER.findByIdAndUpdate(req.params.id, req.body, { new : true, runValidators : true})
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    })
}