import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      default: "inactive",
    },
    role: {
      type: String,
      required: true,
      default: "Admin",
    },
    fName: {
      type: String,
      required: true,
      max: 50,
    },
    lName: {
      type: String,
      required: true,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      required: true,
      max: 50,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AdminUser", AdminUserSchema);
