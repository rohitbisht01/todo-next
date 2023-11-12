import { User } from "@/models/user";
import mongoose from "mongoose";

const config = {
  isConnected: 0,
};

export const connectDb = async () => {
  if (config.isConnected) {
    return;
  }

  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });

    console.log(connection.readyState);
    config.isConnected = connection.readyState;
    console.log("db connected :::");
  } catch (error) {
    console.log("failed to connect with mongodb");
    console.log(error);
  }
};
