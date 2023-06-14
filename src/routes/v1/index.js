const express = require("express");
const {
  TweetController,
  LikeController,
  UserController,
} = require("../../controllers/index");

const router = express.Router();
router.post("/tweets", TweetController.createTweet);
router.post("/users", UserController.create);
router.post("/likes/toggle", LikeController.toggleLike);

module.exports = router;
