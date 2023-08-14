const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

const User = require("../models/user.model");
const { filterObject } = require("../utils/filterObj");

const getToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET);
};

exports.register = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existing_user = await User.findOne({ email: email });

    const filteredBody = filterObject(req.body, "firstName", "lastName", "password", "email");

    if (existing_user._id && existing_user.verified) {
      res
        .status(400)
        .json({ status: "error", message: "User email already in use. Please login." });
    } else if (existing_user._id) {
      const updatedOne = await User.findOneAndUpdate(
        { email: email },
        { ...filteredBody },
        { new: true, validateModifiedOnly: true }
      );

      req.userId = existing_user._id;
      next();
    } else {
      const newUser = await User.create(filteredBody);
      req.userId = existing_user._id;
      // generate OTP, send emai l to user
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
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

exports.generateOTP = async (req, res, next) => {
  try {
    const { userId } = req;

    // generate otp
    const new_otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });

    // calculate expiry time
    const otp_expiry_time = Date.now() + 10 * 60 * 1000; // 10 mins

    // update User Details
    await User.findByIdAndUpdate(userId, {
      otp: new_otp,
      otp_expiry_time,
    });

    // TODO - send email to user

    res.status(200).json({ status: "success", message: "OTP sent successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};

exports.verifyOTP = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    // update User Details
    const user = await User.findOneAndUpdate(
      { email: email },
      {
        otp: new_otp,
        otp_expiry_time: { $gt: Date.now() },
      }
    );

    if (!user) {
      res.status(400).json({ status: "error", message: "Email is invalid or OTP expired!" });
    }

    if (!user.validateOTP(user.otp, otp)) {
      res.status(400).json({ status: "error", message: "OTP is incorrect" });
    }

    // update the verified to true
    user.verified = true;
    user.otp = undefined;
    user.otp_expiry_time = undefined;

    await user.save({ new: true, validateModifiedOnly: true });

    const token = getToken(user._id);

    return res.status(200).json({
      status: "success",
      message: "User verified successfully!",
      data: { ...user, token },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
};
