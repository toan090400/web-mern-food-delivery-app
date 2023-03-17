const Category = require("../models/categoryModel");
const All = async (req, res) => {
  try {
    res.status(400).json({ message: "all" });
    // const categorys = await Category.find();
    // res.status(400).json({ categorys });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const One = async (req, res) => {
  try {
    res.status(400).json({ message: "one" });
    // console.log(req.params);
    // const category = await Category.findOne();
    // res.status(400).json({ category });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const Create = async (req, res) => {
  try {
    res.status(400).json({ message: "create" });
    // console.log(req.body);
    // const item = await new Category({
    //   name: req.body.name,
    //   user: req.body.user,
    //   category: req.body.category,
    //   status: req.body.status,
    // });
    // const create = await item.save();
    // res.status(400).json({ message: "success", create });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const Update = async (req, res) => {
  try {
    res.status(400).json({ message: "update" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const Delete = async (req, res) => {
  try {
    res.status(400).json({ message: "delete" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
module.exports = { All, One, Create, Update, Delete };
