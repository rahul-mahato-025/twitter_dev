const { TweetService } = require("../services");

const tweetService = new TweetService();

const createTweet = async (req, res) => {
  try {
    const tweet = await tweetService.create({
      content: req.body.content,
    });
    return res.status(201).json({
      data: tweet,
      success: true,
      message: "Tweet created successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong!",
      error: error,
    });
  }
};

module.exports = {
  createTweet,
};
