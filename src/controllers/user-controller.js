const user = require("../models/user");
const { UserService } = require("../services/");

const userService = new UserService();
const create = async (req, res) => {
  try {
    const user = await userService.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: user,
      success: true,
      error: {},
      message: "User Created Successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      error: error,
      message: "User cannot be created.",
    });
  }
};

module.exports = {
  create,
};
