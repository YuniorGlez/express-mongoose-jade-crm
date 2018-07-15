const router = require('express').Router();
const { getAll, getOne, create, remove, update } = require('./customers.controller');

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getOne);
router.delete('/:id', remove);
router.patch('/:id', update);

module.exports = router;