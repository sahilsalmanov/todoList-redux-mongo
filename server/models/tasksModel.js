const { default: mongoose } = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: String
})


const Tasks = mongoose.model('Tasks', taskSchema);

module.exports = {
    Tasks
}