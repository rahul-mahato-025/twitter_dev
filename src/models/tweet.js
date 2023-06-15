const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      max: ["255", "Tweet cannot contain more than 255 characters"],
    },
    likes: [
      {
        type: ObjectId,
        ref: "Like",
      },
    ],
    comments: [
      {
        type: ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tweet", tweetSchema);
