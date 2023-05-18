const Tweet = require("../models/tweet");
const CrudRepository = require("./crud-repository");

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async get(id) {
    try {
      const res = await this.model.findById(id).populate({ path: "likes" });
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;
