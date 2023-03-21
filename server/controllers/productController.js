const Product = require("../models/productModel");
const All = async (req, res) => {
  try {
    const products = await Product.find().populate({
      path: "category",
      select: "_id name",
    });
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const One = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).populate({
      path: "category",
      select: "_id name",
    });
    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const Create = async (req, res) => {
  try {
    const create = await Product.create(req.body);
    res.status(200).json({ message: "Thêm mới thành công !", create });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const Update = async (req, res) => {
  try {
    const update = await Product.findByIdAndUpdate(req.params.id, req.body, {
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
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Xóa thành công !" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const DeleteAll = async (req, res) => {
  try {
    await Product.deleteMany({ _id: req.body });
    res.status(200).json({ message: "Xóa thành công !" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
module.exports = { All, One, Create, Update, Delete, DeleteAll };
