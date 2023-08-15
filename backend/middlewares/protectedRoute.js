const jwt = require("jsonwebtoken");
const util = require("util");

const User = require("../models/user.model");

exports.protectedRoute = async (req, res, next) => {
  try {
    // 1. token confirmation
    let token;
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith("Bearer")) {
      token = authorization.split(" ")[1];
    } else if (req.cookies.token) {
      token = req.cookies.token;
    } else {
      return res
        .status(401)
        .json({ status: "error", message: "Unauthorized access. Please login to continue" });
    }

    // 2. token validation

    const decoded_token = await util.promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3. check if user exists
    const this_user = await User.findById(decoded_token.userId);

    if (!this_user) {
      return res.status(400).json({ status: "error", message: "User not found!" });
    }

    // 4. check if user changed their password recently, they need to

    if (this_user.changedPasswordAfter(decoded_token.iat)) {
      return res.status(400).json({
        status: "error",
        message: "User recently updated their password! Please login again to continue",
      });
    }

    req.user = this_user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};
