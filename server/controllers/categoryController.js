const Category = require("../models/categoryModel");
const All = async (req, res) => {
  try {
    const categorys = await Category.find();
    res.status(200).json({ categorys });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const One = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    res.status(200).json({ category });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const Create = async (req, res) => {
  try {
    const create = await Category.create(req.body);
    res.status(200).json({ message: "Thêm mới thành công !", create });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const Update = async (req, res) => {
  try {
    const update = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ message: "Cập nhập thành công !", update });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const Delete = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Xóa thành công !" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const DeleteAll = async (req, res) => {
  try {
    await Category.deleteMany({ _id: req.body });
    res.status(200).json({ message: "Xóa thành công !" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
module.exports = { All, One, Create, Update, Delete, DeleteAll };
