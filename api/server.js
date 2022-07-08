import "dotenv/config";
import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;
import helmet from "helmet";
import morgan from "morgan";

import registerLoginRouter from "./src/routers/registerLoginRouter.js";

app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());

import { mongoConnection } from "./src/config/dbConfig.js";
mongoConnection();

app.use("/api/v1/register-login", registerLoginRouter);

app.get("/", (req, res) => {
  res.json("server is running");
});

app.use((error, req, res) => {
  res.status = error.status || 404;
  res.json({
    status: error,
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at https:localhost:${PORT}`);
});
