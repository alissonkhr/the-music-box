//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Music = require("../models/music.js");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//index
router.get("/", async (req, res) => {
  let music = await Music.find({});
  console.log("Music", music);
  res.render("index.ejs", { music });
});

//seed
/*router.get("/seed", (req, res) => {
  Music.create(
    [
      {
        title: "Everything Goes On",
        artist: "Porter Robinson",
        image: "https://pbs.twimg.com/media/FWnurznVEAAyDUu.jpg",
        note: "A nice song about some League of Legends characters",
        album: false,
      },
      {
        title: "King for a Day",
        artist: "Pierce the Viel",
        image:
          "https://gp1.wac.edgecastcdn.net/802892/http_public_production/photos/images/11882414/original/crop:x0y0w600h600/hash:1463774532/763618.png?1463774532",
        note: "Big jams",
        album: false,
      },
      {
        title: "Heat Waves",
        artist: "Glass Animals",
        image:
          "https://static.wikia.nocookie.net/glassanimals/images/5/51/Heat_Waves_%28SingleCover%29.jpeg/revision/latest?cb=20211018225556",
        note: "Sometimes all I think about is youuuuuu",
        album: false,
      },
    ],
    (err, data) => {
      res.redirect("/music");
    }
  );
});*/

//new
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

//show
router.get("/:id", async (req, res) => {
  const music = await Music.findById(req.params.id);
  res.render("show.ejs", {
    music: music,
  });
});

//create
router.post(
  "/",
  urlencodedParser,
  [
    check("title", "This post needs to have a title.")
      .exists()
      .isLength({ min: 2 }),
    check("artist", "Please add an artist name.").exists().isLength({ min: 2 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      const alert = errors.array();
      res.render("new", {
        alert,
      });
    } else if (errors.isEmpty()) {
      if (req.body.album === "on") {
        req.body.album = true;
      } else {
        req.body.album = false;
      }
      Music.create(req.body, (error, createdMusic) => {
        if (error) {
          console.log("error", error);
          res.send(error);
        } else {
          res.redirect("/music");
        }
      });
    }
  }
);

//delete
router.delete("/:id", (req, res) => {
  Music.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) console.log(err);
    res.redirect("/music");
  });
});

//edit
router.get("/:id/edit", (req, res) => {
  Music.findById(req.params.id, (err, foundMusic) => {
    res.render("edit.ejs", { music: foundMusic });
  });
});

//update
router.put("/:id", (req, res) => {
  if (req.body.album === "on") {
    req.body.album = true;
  } else {
    req.body.album = false;
  }
  Music.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedModel) => {
      res.redirect("/music");
    }
  );
});

module.exports = router;
