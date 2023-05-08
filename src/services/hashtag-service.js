const { HashtagRepository } = require("../repositories");

class HashtagService {
  constructor() {
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    try {
      const hashtag = await this.hashtagRepository.create(data);
      return hashtag;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkCreate(hashtagArray) {
    try {
      const tags = await this.hashtagRepository.bulkCreate(hashtagArray);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(hashtagArray) {
    try {
      const matchedTags = await this.hashtagRepository.getAll(hashtagArray);
      return matchedTags;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HashtagService;
