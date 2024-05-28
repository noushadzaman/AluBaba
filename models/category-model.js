import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  img: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
});

export const categoryModel =
  mongoose.models?.categories ?? mongoose.model("categories", categorySchema);
