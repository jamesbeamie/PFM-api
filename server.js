const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Bodyparser middleware

app.use(bodyParser.json());
const port = process.env.PORT || 8080;

const db = require("./configs/keys");
const mongoUrl = db.MONGO_URI;
mongoose
  .connect(mongoUrl)
  .then(() => console.log("connected to db"))
  .catch(err => console.log(err));
//"mongodb://localhost:27017/mydb"

app.listen(port, () => console.log(`server running on ${port}`));
