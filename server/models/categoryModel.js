const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema(
  {
    /*
    trim: bỏ 2 khoảng cách đầu và cuối
    vd: " data " => "data"
    */
    name: { type: String, trim: true },

    slug: { type: String, trim: true },

    discription: { type: String, trim: true },

    image: { type: Object },

    imageLink: {
      type: String,
      trim: true,
      default: "https://lh3.googleusercontent.com/d",
    },
  },
  { timestamps: true }
);

const Category = (module.exports = mongoose.model("Category", CategorySchema));
