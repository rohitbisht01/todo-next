import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  about: String,
  profileURL: String,
  //   address:{
  //     street:String,
  //     city:String,
  //     country:String
  //   }
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
