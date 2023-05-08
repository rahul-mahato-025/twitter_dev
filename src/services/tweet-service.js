const { TweetRepository } = require("../repositories");
const HashtagService = require("./hashtag-service");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagService = new HashtagService();
  }

  async create(data) {
    try {
      const { content } = data;
      const tweet = await this.tweetRepository.create(data);

      // Extract hashtags from the tweet
      const tags = content
        .match(/#[a-zA-Z0-9_]+/g)
        .map((tag) => tag.slice(1).toLowerCase());

      // Find all the tags which are already present in db and push the current tweet
      const existingTags = await this.hashtagService.getAll(tags);
      const titleOfExistingTags = existingTags.map((tag) => tag.title);
      existingTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
      });

      // Filter new tags
      let newTags = tags.filter((tag) => !titleOfExistingTags.includes(tag));
      newTags = newTags.map((tag) => {
        return {
          title: tag,
          tweets: [tweet.id],
        };
      });

      // Create new tags
      await this.hashtagService.bulkCreate(newTags);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetService;
