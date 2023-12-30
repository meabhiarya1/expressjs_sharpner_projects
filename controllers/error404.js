const path = require("path");

const rootDir = require("../util/path");

exports.errorPage = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
};
