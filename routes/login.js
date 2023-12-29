const path = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

router.get("/login", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "login.html"));
});

router.post("/login", (req, res, next) => {
  res.redirect("/message");
});

module.exports = router;
