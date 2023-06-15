const { CommentService } = require("../services");

const commentService = new CommentService();

const create = async (req, res) => {
  try {
    const comment = await commentService.create({
      onModel: req.query.onModel,
      user: req.query.userId,
      commentable: req.query.commentable,
      content: req.body.content,
      comments: [],
    });

    return res.status(201).json({
      data: comment,
      success: true,
      message: "comment created successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Can't create the comment",
      error: error,
    });
  }
};

module.exports = {
  create,
};
