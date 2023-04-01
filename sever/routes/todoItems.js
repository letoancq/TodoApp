const router = require("express").Router();

//import todo model
const todoItemsModel = require("../models/todoItems");

//lets create our first route
router.post("/api/items", async (req, res, next) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
    });
    //save this item in database
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (error) {
    res.json(error);
  }
});

//Route get Item
router.get("/api/items", async (req, res, next) => {
  try {
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems);
  } catch (error) {
    res.json(error);
  }
});

//update item
router.put("/api/item/:id", async (req, res, next) => {
  try {
    //Finf item by its id and update it
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("items Updated");
  } catch (error) {
    res.json(error);
  }
});

//delete item
router.delete("/api/item/:id", async (req, res, next) => {
  try {
    //Finf item by its id and update it
    const updateItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("items deleted");
  } catch (error) {
    res.json(error);
  }
});

//export route
module.exports = router;
