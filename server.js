const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//Bodyparser middleware

app.use(bodyParser.json());
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`server running on ${port}`));