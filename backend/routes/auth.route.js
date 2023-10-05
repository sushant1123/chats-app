const router = require("express").Router();

const authController = require("../controllers/auth.controller");

router.post("/login", authController.login);
router.post("/register", authController.register, authController.generateOTP);

router.post("/generate-otp", authController.generateOTP);
router.post("/verify-otp", authController.verifyOTP);

router.post("/forgot-password", authController.forgetPassword);
router.post("/reset-password", authController.resetPassword);

module.exports = router;
