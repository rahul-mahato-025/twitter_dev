const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    max: ["255", "Tweet cannot contain more than 255 characters"],
  },
});

module.exports = mongoose.model("Tweet", tweetSchema);
