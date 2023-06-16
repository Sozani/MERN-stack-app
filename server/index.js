import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
mongoose
  .connect(
    "mongodb+srv://ahemddoha:socialmedia123@cluster0.0jwhkdk.mongodb.net/Socialmedia?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(5000, () => {
      console.log("listening....");
    })
  );
