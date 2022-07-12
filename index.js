const express = require("express");

const app = express();

app.listen(3000, () => console.log("Server running at localhost:3000"));

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.send("Hello World!");
});
