import { string } from "joi";
import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema({
  status: {
    type: string,
    required: true,
    default: "inactive",
  },
});
