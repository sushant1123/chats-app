const router = require("express").Router();

const { protectedRoute } = require("../middlewares/protectedRoute");
const userController = require("../controllers/user.controller");

router.patch("/update-me", protectedRoute, userController.updateMe);

module.exports = router;
