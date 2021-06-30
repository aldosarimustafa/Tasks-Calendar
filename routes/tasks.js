var express = require('express');
var router = express.Router();

const tasksCtrl = require('../controllers/tasks')

router.put('/:id', tasksCtrl.update)
router.get('/:id/edit', tasksCtrl.edit)
router.post('/', tasksCtrl.create);
router.get('/new', tasksCtrl.new);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
