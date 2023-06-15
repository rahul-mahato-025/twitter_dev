const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;
const commentSchema = new mongoose.Schema(
  {
    onModel: {
      type: String,
      enum: ["Tweet", "Comment"],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: ObjectId,
      required: true,
    },
    commentable: {
      type: ObjectId,
      refPath: "onModel",
      required: true,
    },
    comments: [
      {
        type: ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
