const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://aashirharis6:aashir7834@cluster.7paoqdf.mongodb.net/todos_app")

// mongodb+srv://aashirharis6:aashir7834@cluster.7paoqdf.mongodb.net/todos_app

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo
}