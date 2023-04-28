const express = require("express");
const connectDb = require("../db/index");
const bodyParser = require("body-parser");

const app = express();

connectDb();

app.use(bodyParser.json());

app.use("/api/cities", require("../router/City"));

app.listen(3000, () => {
  console.log("conectadooooo");
});