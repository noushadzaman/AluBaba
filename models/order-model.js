import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  items: { type: Number, required: true },
});

const orderSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  products: [productSchema],
  streetAddress: {
    type: String,
    required: true,
  },
});

export const orderModel =
  mongoose.models?.orders ?? mongoose?.model("orders", orderSchema);
