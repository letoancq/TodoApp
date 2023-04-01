const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

//use express.json() to get data into json format
app.use(express.json());

//Port
const Port = process.env.PORT || 5500;

//use cors
app.use(cors());

//import route
const TodoItemRoute = require('./routes/todoItems.js');

//Let connect to mongoDB
mongoose
  .connect(
    "mongodb+srv://letoan:letoan410@cluster0.m09swex.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connect to mongoDB"))
  .catch((err) => console.log("Error connecting"));

app.use("/", TodoItemRoute);

//Add Port and connect to server
app.listen(Port, () => {
  console.log("listening on " + Port);
});
