const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const musicSchema = new Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    image: { type: String, required: true },
    note: { type: String, required: true },
    album: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Music = mongoose.model("Music", musicSchema);

// Export the model to make it accessible in `app.js`
module.exports = Music;
