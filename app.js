const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first");
  next();
  res.send("<h1>Hello From Express</h1>")
});

app.use((req, res, next) => {
  console.log("second");
});

app.listen(3000);
