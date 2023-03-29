const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // 2) Check if user exists && password is correct
    const user = await User.findOne({ username }).select("+password");
    if (!user) {
      return res.status(404).json({
        message: "Incorrect username",
      });
    }
    const correct = await bcrypt.compare(password, user.password);
    if (!correct) {
      return res.status(404).json({
        message: "Incorrect password",
      });
    }
    // accessToken
    const accessToken = await jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: process.env.JWT_ACCESS_EXPIRWS_IN }
    );
    // Ẩn data
    user.password = undefined;
    // user.isAdmin = undefined;
    res.status(201).json({
      user,
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.checkLogin = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      return res.status(404).json({
        message: "Bạn chưa đăng nhập.",
      });
    }
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          message: "Token đã hết hạn.",
        });
      }
      req.user = user;
      req.body.user = user.id;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
exports.checkAdmin = async (req, res, next) => {
  try {
    const isAdmin = await req.user.isAdmin;
    console.log(isAdmin);
    if (isAdmin) {
      next();
    } else {
      return res.status(404).json({
        message: "Bạn không có quyền Admin!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
