const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    task: {type: String, required: true},
    completed: {type: Boolean, default: false},
    dateCreated: {type: Date, required: true}

}, {versionKey:false}, {timestamp: true})

// Export the Mongoose model
module.exports = mongoose.model('Task', TaskSchema);

