const express = require("express");
const router = express.Router();

//item model
const Item = require("../../models/Item");

//@route GET api/items
//@description Get all items
//@access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
});

//@route GET api/items by ID
//@description Get all items
//@access Public
router.get("/:id", (req, res) => {
    Item.find({ _id: req.params.id})
      .sort({ date: -1 })
      .then((items) => res.json(items));
  });

//@route POST api/items
//@description Create an item
//@access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem.save().then((item) => res.json(item));
});

//@route DELETE api/items
//@description delete an item
//@access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ sucess: true })))
    .catch((err) => console.log(err))
    .then((res) => res.status(404).json({ success: false }));
});

module.exports = router;
