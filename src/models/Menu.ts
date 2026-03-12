import mongoose, { Schema, models, model } from "mongoose";

const MenuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: String,
  image: String,
  category: String
}, { timestamps: true });

const Menu = models.Menu || model("Menu", MenuSchema);

export default Menu;