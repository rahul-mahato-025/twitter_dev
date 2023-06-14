const { LikeService } = require("../services/index");

const likeService = new LikeService();

const toggleLike = async (req, res) => {
  try {
    const resp = await likeService.toggleLike(
      req.query.docId,
      req.query.model,
      req.query.userId
    );
    return res.status(200).json({
      data: resp,
      success: true,
      error: {},
      message: "Like toggled",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      error: error,
      message: "Something went wrong!",
    });
  }
};

module.exports = {
  toggleLike,
};
