//dependencies
require("dotenv").config();
console.log(process.env.PORT);
const PORT = process.env.PORT;
//dotenv file working and linked

const express = require("express");
const app = express();
const Music = require('./models/music.js');
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
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const musicController = require('./controllers/musicController.js')
app.use('/music', musicController)

//default route
app.get("/", (req, res) => {
  const today = new Date();
  res.send(`
    <h1>Time for Tunes</h1>
    <p>Prepare your ears for jams</p>
    <p>${today}</p>
  `);
});

//port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
