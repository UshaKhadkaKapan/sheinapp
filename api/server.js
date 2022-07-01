import "dotenv/config";
import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;
import helmet from "helmet";
import morgan from "morgan";

app.use(helmet());
app.use(morgan("tiny"));
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
