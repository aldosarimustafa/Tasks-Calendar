const Task = require('../models/task');

module.exports = {
    create,
    new: newTask,
    index,
    show,
    delete: deleteTask,
    edit,
    update
}

function update(req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, task) {
        if (err || !task) return res.redirect('/tasks');
        res.redirect(`/tasks/${task._id}`);
    });
}

function edit(req, res) {
    Task.findById({_id: req.params.id, user: req.user._id}, function(err, task) {
        if (err || !task) return res.redirect('/tasks');
        res.render('tasks/edit', { task });
      });
}

function deleteTask(req, res) {
    Task.findOneAndDelete(
        { _id: req.params.id, user: req.user._id }, function (err) {
            res.redirect('/tasks');
        }
    );
}

function show(req, res) {
    Task.findById(req.params.id, function (err, task) {
        res.render("tasks/show", { task });
    });
}

function index(req, res) {
    let yr = parseInt(req.query.yr);
    let mo = parseInt(req.query.mo);
    if (!yr) {
        const today = new Date();
        yr = today.getFullYear();
        mo = today.getMonth();
    }
    const startDate = new Date(yr, mo, 1, 0, 0);
    const endDate = new Date(yr, parseInt(mo) + 1, 1, 0, 0);
    console.log(startDate, endDate);
    Task.find({
        user: req.user._id,
        dueDate: { $gte: startDate },
        dueDate: { $lt: endDate }
    })
        .sort("dueDate")
        .exec(function (err, tasks) {
            res.render('tasks/index', { tasks, startDate, yr, mo });
        });
}

function newTask(req, res) {
    let startDate = new Date();
    startDate = startDate.toISOString().slice(0, 10);
    res.render('tasks/new', { startDate });
}

function create(req, res) {
    req.body.user = req.user._id;
    const s = req.body.dueDate;
    req.body.dueDate = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
    Task.create(req.body, function (err, task) {
        res.redirect("/tasks");
    });
}