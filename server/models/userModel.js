const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    /*
    trim: bỏ 2 khoảng cách đầu và cuối
    vd: " data " => "data"
    */
    username: {
      type: String,
      trim: true,
    },

    password: {
      type: String,
      trim: true,
      select: false,
    },

    image: { type: Object },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = (module.exports = mongoose.model("User", UserSchema));
