const Task = require('../models/task');

module.exports = {
    create,
    delete: deleteNote,
}

function create(req, res){
    Task.findById(req.params.id, function(err, task){
        task.notes.push(req.body);
        task.save(function(err){
            res.redirect(`/tasks/${task._id}`);
        });
    });
}


function deleteNote(req, res) {
    Task.findOne({'notes._id': req.params.id}, function(err, task) {
        const noteSchema = task.notes.id(req.params.id);
        noteSchema.remove();
        task.save(function(err) {
            res.redirect(`/tasks/${task._id}`);
        })
    })
}