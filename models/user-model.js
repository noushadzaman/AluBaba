import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: false,
    type: String,
  },
  image: {
    required: false,
    type: String,
  },
  phone_number: {
    required: false,
    type: String,
  },
  shipping_address: {
    required: false,
    type: String,
  },
  shipping_address_number: {
    required: false,
    type: String,
  },
  billing_address: {
    required: false,
    type: String,
  },
  billing_address_number: {
    required: false,
    type: String,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
