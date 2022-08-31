//dependencies
require("dotenv").config();
console.log(process.env.PORT);
const PORT = process.env.PORT || 5000;
//dotenv file working and linked

const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const app = express();
const Music = require("./models/music.js");
const methodOverride = require("method-override");

//mongoose connection
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;
console.log(process.env.MONGODB_URI);
mongoose.connect(mongoURI);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//middleware
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");

const musicController = require("./controllers/musicController.js");
app.use("/music", musicController);

//default route
//index
app.get("/", async (req, res) => {
  let music = await Music.find({});
  console.log("Music", music);
  res.render("index.ejs", { music });
});

//port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
