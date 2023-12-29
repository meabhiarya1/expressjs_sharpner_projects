const path = require("path");

const rootDir = require("../util/path");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.addNewProduct = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};

exports.getNewContact = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.postNewContact = (req, res, next) => {
  console.log(req.body);
  res.redirect("/success");
};

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};

exports.postSuccess = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};
