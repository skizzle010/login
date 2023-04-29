const User = require("../models/user");


exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.login = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.forgotpassword = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

exports.resetpassword = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
