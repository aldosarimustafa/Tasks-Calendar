const Note = require('../models/tasks');

module.exports = {
    create,
    delete: deleteNote,
}

function create(req, res){
    Note.findById(req.params.id, function(err, task){
        task.notes.push(req.body);
        task.save(function(err){
            res.redirect(`/tasks/${task._id}`);
        });
    });
}


function deleteNote(req, res) {
    Note.findOne({'notes._id': req.params.id}, function(err, task) {
        const noteSubdoc = task.notes.id(req.params.id);
        noteSubdoc.remove();
        task.save(function(err) {
            res.redirect(`/tasks/${task._id}`);
        })
    })
}