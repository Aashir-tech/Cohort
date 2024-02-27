const moongoose = require('mongoose');

// mongodb+srv://aashirharis6:aashir7834@cluster.7paoqdf.mongodb.net/todos
//.env
moongoose.connect('mongodb+srv://aashirharis6:aashir7834@cluster.7paoqdf.mongodb.net/todos')

const todoSchema = moongoose.Schema({
    title: String,
    description : String,
    completed: Boolean
})

const todo = moongoose.model('todos', todoSchema);

module.exports = {
    todo
}