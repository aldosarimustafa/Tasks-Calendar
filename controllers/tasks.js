const Task = require('../models/task');

module.exports = {
    create,
    new: newTask,
    edit,
    update,
    index
}

function index(req, res){
    Task.find({user: req.user._id}, function(err, tasks) {
        res.render('tasks/index', { tasks });
    });
}

function update(req, res) {
    Task.findOneAndUpdate(
        {_id: req.params.id, user: req.user._id},
        req.body,
        {new: true},
        function(err, task) {
          if (err || !task) return res.redirect('/tasks');
          res.redirect('tasks');
        }
      );
}

function edit(req, res) {
    Task.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, book) {
        if (err || !task) return res.redirect('/tasks');
        res.render('tasks/edit', {task});
      });
}

function newTask(req, res) {
    res.render('tasks/new')
}

function create(req, res) {
    Task.create(req.body, function(err, task) {
        res.redirect("/tasks");
    });
    
}