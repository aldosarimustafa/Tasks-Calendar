const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Task', taskSchema);