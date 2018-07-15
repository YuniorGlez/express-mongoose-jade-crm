const router = require('express').Router();
const { getAllCustomers } = require('./customers.controller');

router.get('/', getAllCustomers);

module.exports = router;