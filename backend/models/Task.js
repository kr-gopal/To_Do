
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var TaskSchema = new Schema({
    description: {
        type: String,
        required: true
    }},
    {
        timestamps: true
    }
);

var Tasks = mongoose.model('Task', TaskSchema);
module.exports = Tasks;