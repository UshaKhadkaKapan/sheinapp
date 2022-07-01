import express, { Router } from "express";
import { adminRegistrationValidation } from "../middleware/validaiomnMiddleware.js";
const route = express.Router();

// route.all("/", (req, res, next) => {
//   console.log("all api will be check here first and the move to another");
//   next();
// });

route.post("/", adminRegistrationValidation, (req, res) => {
  console.log(req.body);
  res.json({
    message: "todo",
  });
});

export default route;
