const Review = require("../models/reviewModel");
exports.All = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate({
        path: "product",
        select: "name slug",
      })
      .populate({
        path: "user",
        select: "username image imageLink",
      });
    res.status(200).json({ reviews });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.Create = async (req, res) => {
  try {
    const create = await Review.create(req.body);
    res.status(200).json({ message: "Đánh giá thành công !", create });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
