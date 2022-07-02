import express, { Router } from "express";
import { hashPassword } from "../Helper/bcryptHelper.js";
import { adminRegistrationValidation } from "../middleware/validaiomnMiddleware.js";
import { createAdminUser } from "./model/AdminUser/AdminUserModel.js";
const route = express.Router();

// route.all("/", (req, res, next) => {
//   console.log("all api will be check here first and the move to another");
//   next();
// });

route.post("/", adminRegistrationValidation, async (req, res, next) => {
  console.log(req.body);

  try {
    // encrypt the password

    req.body.password = hashPassword(req.body.password);

    // call the model to run the save query
    const result = await createAdminUser(req.body);
    console.log(result);
    // unique url send to the client for the proof
    res.json({
      message: "todo",
    });
  } catch (error) {
    next(error);
  }
});

export default route;
