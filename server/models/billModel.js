const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    /*
    trim: bỏ 2 khoảng cách đầu và cuối
    vd: " data " => "data"
    */
    name: { type: String, trim: true },

    nameSlug: { type: String, trim: true },

    totalPrice: { type: Number, trim: true },

    product: [
      {
        type: Object,
      },
    ],

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Product = (module.exports = mongoose.model("Product", ProductSchema));
