import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
});

export const productModel =
  mongoose?.models?.products ?? mongoose?.model("products", productSchema);
