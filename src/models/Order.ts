import mongoose, { Schema, models, model } from "mongoose";

const OrderSchema = new Schema({
  userId: {
    type: String
  },
  items: [
    {
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  totalPrice: Number,
  status: {
    type: String,
    default: "pending"
  }
}, { timestamps: true });

const Order = models.Order || model("Order", OrderSchema);

export default Order;