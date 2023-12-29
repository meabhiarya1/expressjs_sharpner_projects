const express = require("express");

const router = express.Router();

const successController = require("../controllers/products");

router.get("/success", successController.postSuccess);

module.exports = router;
