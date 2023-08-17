const UserModel = require("../models/user.model");
const { filterObject } = require("../utils/filterObj");

exports.updateMe = async (req, res, next) => {
  try {
    const { user } = req;

    const filteredBody = filterObject(req.body, "firstName", "lastName", "about", "avatar");

    const updated_user = await UserModel.findByIdAndUpdate(
      user._id,
      { ...filteredBody },
      {
        new: true,
        validateModifiedOnly: true,
      }
    );

    return res
      .status(200)
      .json({ status: "success", message: "Profile updated successfully.", data: updated_user });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
