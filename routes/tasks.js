var express = require('express');
var router = express.Router();

const tasksCtrl = require('../controllers/tasks');
const isLoggedIn = require('../config/auth');

router.put('/:id', tasksCtrl.update);
router.get('/:id/edit', tasksCtrl.edit);
router.get('/', isLoggedIn, tasksCtrl.index);
router.get('/new', isLoggedIn, tasksCtrl.new);
router.get('/:id', isLoggedIn, tasksCtrl.show);
router.delete('/:id', isLoggedIn, tasksCtrl.delete);
router.post('/', isLoggedIn, tasksCtrl.create);

module.exports = router;
