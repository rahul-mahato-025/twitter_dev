const express = require("express");
const {
  TweetController,
  LikeController,
  UserController,
  CommentController,
} = require("../../controllers/index");

const router = express.Router();
router.post("/tweets", TweetController.createTweet);
router.post("/users", UserController.create);
router.post("/likes/toggle", LikeController.toggleLike);
router.post("/comments", CommentController.create);

module.exports = router;
