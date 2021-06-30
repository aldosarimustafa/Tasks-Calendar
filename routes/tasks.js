var express = require('express');
var router = express.Router();

const tasksCtrl = require('../controllers/tasks')

router.post('/tasks/', tasksCtrl.create);
router.get('/tasks/new', tasksCtrl.new);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
