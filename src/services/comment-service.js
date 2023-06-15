const { CommentRepository, TweetRepository } = require("../repositories");

class CommentService {
  constructor() {
    this.commentRepository = new CommentRepository();
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    try {
      var commentable;
      if (data.onModel == "Tweet") {
        commentable = await this.tweetRepository.get(data.commentable);
      } else if (data.onModel == "Comment") {
        commentable = await this.commentRepository.get(data.commentable);
      } else {
        throw new Error("Can't comment on this resource");
      }

      const comment = await this.commentRepository.create(data);
      commentable.comments.push(comment);
      await commentable.save();
      return comment;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = CommentService;
