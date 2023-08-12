const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const getToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET);
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ status: "error", message: "Both Email and Password are required." });
    }

    const user = await User.findOne({ email: email }).select("+password");

    if (!user || (await user.validatePassword(password, user.password))) {
      res.status(400).json({ status: "error", message: "Email or Password is incorrect." });
    }

    const token = getToken(user._id);

    return res.status(200).json({
      status: "success",
      message: "User login is successful...",
      data: { ...user, token },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};
