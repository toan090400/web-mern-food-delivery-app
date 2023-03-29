const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
exports.All = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.Create = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  try {
    const create = await User.create(req.body);
    res.status(200).json({ message: "Thêm mới thành công !", create });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
