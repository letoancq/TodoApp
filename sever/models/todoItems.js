//import mongoose to create new Schema

const mongoose = require("mongoose");

//create Schema
const TodoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    require: true,
  },
});


//export Schema
module.exports = mongoose.model('todo', TodoItemSchema);