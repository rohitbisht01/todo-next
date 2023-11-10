import { User } from "@/models/user";
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });

    console.log("db connected :::");

    // const newUser = new User({
    //   name: "rohit",
    //   email: "test@gmail.com",
    //   password: "test",
    //   about: "this is testing",
    // });

    // await newUser.save();
    // console.log("User is created");

    // console.log(connection);
  } catch (error) {
    console.log("failed to connect with mongodb");
    console.log(error);
  }
};
