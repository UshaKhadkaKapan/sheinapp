import mongoose from "mongoose";

export const mongoConnection = () => {
  try {
    const conStr = process.env.MONGO_URL;
    const con = mongoose.connect(conStr);
    con && console.log("mongo is connected");
  } catch (error) {
    console.log(error);
  }
};
