const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log("Can't create tweet ", error);
    }
  }

  async destroy(tweetId) {
    try {
      await Tweet.findByIdAndRemove(tweetId);
      return true;
    } catch (error) {
      console.log("Can't delete tweet ", error);
    }
  }
}

module.exports = TweetRepository;
