const CUSTOMER = require('./customers.model');

module.exports = { getAllCustomers };

function getAllCustomers(req, res) {
  CUSTOMER.find()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    })
}