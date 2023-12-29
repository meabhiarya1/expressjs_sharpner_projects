const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/contact", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

router.post("/contact", (req, res, next) => {
  res.redirect("/success");
});

module.exports = router;
