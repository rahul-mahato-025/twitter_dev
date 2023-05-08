const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  tweets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
    },
  ],
});

module.exports = mongoose.model("Hashtag", hashtagSchema);
