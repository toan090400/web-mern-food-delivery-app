const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    /*
    trim: bỏ 2 khoảng cách đầu và cuối
    vd: " data " => "data"
    */
    name: { type: String, trim: true },

    nameSlug: { type: String, trim: true },

    discription: { type: String, trim: true },

    price: { type: Number, trim: true },

    images: [{ type: Object }],

    category: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
      },
    ],

    status: {
      type: String,
      trim: true,
    },

    imageLink: {
      type: String,
      trim: true,
      default: "https://lh3.googleusercontent.com/d",
    },
  },
  { timestamps: true }
);

const Product = (module.exports = mongoose.model("Product", ProductSchema));
