const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const musicSchema = new Schema(
  {
    title: { type: String, trim: true },
    artist: { type: String, trim: true },
    link: { type: String, trim: true},
    image: { type: String, trim: true },
    note: { type: String, trim: true },
    album: { type: Boolean },
  },
  { timestamps: true }
);

const Music = mongoose.model("Music", musicSchema);

// Export the model to make it accessible in `app.js`
module.exports = Music;
