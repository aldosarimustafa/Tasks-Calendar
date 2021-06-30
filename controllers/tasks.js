const Task = require('../models/task');

module.exports = {
    create,
    new: newTask
}

function newTask(req, res) {
    res.render('tasks/add')
}

function create(req, res) {
    const task = new Task(req.body);
    task.save(function(err) {
        console.log(Task)
        console.log(err)
        res.redirect("/tasks");
    })
    
}