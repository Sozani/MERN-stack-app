import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import AuthRoute from "./Routes/AuthRoute.js";
import dotenv from "dotenv";
//Routes
const app = express();
//MiddleWare
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
dotenv.config();
mongoose
  .connect(process.env.MANGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(`listening at port ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log(error);
  });
//usage of Routes
app.use("/auth", AuthRoute);
