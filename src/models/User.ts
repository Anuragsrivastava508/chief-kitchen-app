import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: {
    type: String,
    default: "user"
  }
}, { timestamps: true });

const User = models.User || model("User", UserSchema);

export default User;