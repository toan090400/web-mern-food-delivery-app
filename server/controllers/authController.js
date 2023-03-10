const User = require("../models/userModel");
exports.login = async (req, res) => {
  try {
    const books = await User.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json(error);
  }
};
