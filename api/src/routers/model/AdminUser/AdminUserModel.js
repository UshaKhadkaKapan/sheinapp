import AdminUerSchema from "./AdminUerSchema.js";

export const createAdminUser = (obj) => {
  return AdminUerSchema(obj).save();
};
