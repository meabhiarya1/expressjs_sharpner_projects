const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const errorController = require("./controllers/error");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const loginRoutes = require("./routes/login");
const messageRoutes = require("./routes/message");
const contactRoutes = require("./routes/contactus");
const successRoutes = require("./routes/success");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(loginRoutes);
app.use(messageRoutes);
app.use(contactRoutes);
app.use(successRoutes);

app.use(errorController.errorPage);

app.listen(3000);
