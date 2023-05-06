const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    max: ["255", "Tweet cannot contain more than 255 characters"],
  },
  hashtags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hashtag",
    },
  ],
});

module.exports = mongoose.model("Tweet", tweetSchema);
