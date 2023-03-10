const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    /*
    trim: bỏ 2 khoảng cách đầu và cuối
    vd: " data " => "data"
    */
    name: { type: String, trim: true },
    nameSlug: { type: String, trim: true },
    price: { type: Number, trim: true },
    imageLink: {
      type: String,
      trim: true,
      default: "https://lh3.googleusercontent.com/d",
    },
    category: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
      },
    ],
  },
  { timestamps: true }
);

const Product = (module.exports = mongoose.model("Product", ProductSchema));
