const mongoose = require("mongoose");
const BillSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },

    phone: { type: Number, trim: true },

    address: { type: String, trim: true },

    total: { type: Number, trim: true },

    products: [
      {
        id: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number, trim: true },
        totalProduct: { type: Number, trim: true },
      },
    ],

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Bill = (module.exports = mongoose.model("Bill", BillSchema));
