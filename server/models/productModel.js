const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    /*
    trim: bỏ 2 khoảng cách đầu và cuối
    vd: " data " => "data"
    */
    name: { type: String, trim: true },

    slug: { type: String, trim: true },

    discription: { type: String, trim: true },

    price: { type: Number, trim: true },

    images: [
      {
        id: { type: String, trim: true },
        name: { type: String, trim: true },
        link: {
          type: String,
          trim: true,
          default: "https://lh3.googleusercontent.com/d",
        },
      },
    ],

    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },

    status: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Product = (module.exports = mongoose.model("Product", ProductSchema));
