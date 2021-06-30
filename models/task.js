const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  note: { type: String, required: true },
}, {
  timestamps: true
});

const taskSchema = new Schema({
  task: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  dueDate: { type: Date, required: true },
  notes: [noteSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);