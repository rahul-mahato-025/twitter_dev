const Hashtag = require("../models/hashtag");

class HashtagRepository {
  async create(data) {
    try {
      const hashtag = await Hashtag.create(data);
      return hashtag;
    } catch (error) {
      console.log("Can't create hashtag ", error);
    }
  }

  async bulkCreate(hashtagArray) {
    try {
      const tags = await Hashtag.insertMany(hashtagArray);
      return tags;
    } catch (error) {
      console.log("Error creating tags ", error);
    }
  }

  async destroy(hashtagId) {
    try {
      await Hashtag.findByIdAndRemove(hashtagId);
      return true;
    } catch (error) {
      console.log("Can't delete hashtag ", error);
    }
  }

  async getAll(hashtagArray) {
    try {
      const matchedTags = await Hashtag.find({
        title: hashtagArray,
      });
      return matchedTags;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HashtagRepository;
