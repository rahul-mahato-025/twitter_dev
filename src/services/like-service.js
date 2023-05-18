const { LikeRepository, TweetRepository } = require("../repositories");

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(docId, model, userId) {
    try {
      var isLiked;
      if (model === "Tweet") {
        var likable = await this.tweetRepository.get(docId);
      }
      const like = await this.likeRepository.findByLikable({
        onModel: model,
        likable: docId,
        user: userId,
      });

      if (like) {
        likable.likes.pull(like.id);
        await likable.save();
        await this.likeRepository.destroy(like.id);
        isLiked = false;
      } else {
        const newLike = await this.likeRepository.create({
          onModel: model,
          likable: docId,
          user: userId,
        });
        likable.likes.push(newLike);
        await likable.save();
        isLiked = true;
      }
      return isLiked;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LikeService;
