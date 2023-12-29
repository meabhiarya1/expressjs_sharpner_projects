const express = require("express");
const router = express.Router();

const contactController = require("../controllers/products");

router.get("/contact", contactController.getNewContact);

router.post("/contact", contactController.postNewContact);

module.exports = router;
