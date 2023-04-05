const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema(
  {
    review: { type: String, trim: true },

    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Review = (module.exports = mongoose.model("Review", ReviewSchema));
