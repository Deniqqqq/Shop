import express from "express";
import mongoose from "mongoose";
import router from "./routers/index";

mongoose
  .connect(
    "mongodb+srv://admin:qwerty123@cluster0.rx72usy.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(router);

app.listen(4001, () => {
  console.log("Server started...");
});
