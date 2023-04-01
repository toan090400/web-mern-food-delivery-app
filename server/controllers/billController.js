const Bill = require("../models/billModel");
const All = async (req, res) => {
  try {
    const bills = await Bill.find()
      .populate({
        path: "user",
        select: "username image imageLink",
      })
      .populate({
        path: "products.id",
        select: "name price _id",
      });
    res.status(200).json({ bills });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const One = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id)
      .populate({
        path: "user",
        select: "username image imageLink",
      })
      .populate({
        path: "products.id",
        select: "name price images",
      });
    res.status(200).json({ bill });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
const Create = async (req, res) => {
  try {
    const create = await Bill.create(req.body);
    res.status(200).json({ create, message: "Thanh toán thành công!" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
module.exports = { All, One, Create };
