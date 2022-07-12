const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");
//connection to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("Connected to db!");
  app.listen(3000, () => console.log("Server running at localhost:3000"));
});

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

//view engine configurations
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("todo.ejs");
});

app.post("/", (req, res) => {
  console.log(req.body);
});
