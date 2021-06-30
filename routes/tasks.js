var express = require('express');
var router = express.Router();

const tasksCtrl = require('../controllers/tasks');

router.get('/', tasksCtrl.index);
router.put('/:id', tasksCtrl.update);
router.get('/:id/edit', tasksCtrl.edit);
router.post('/', tasksCtrl.create);
router.get('/new', tasksCtrl.new);

module.exports = router;
