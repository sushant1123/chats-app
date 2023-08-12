const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    avatar: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: function (email) {
          return String(email)
            .toLowerCase()
            .match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
        },
        message: (prop) => `Email ${prop.value} is invalid`,
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: function (pwd) {
          return String(pwd).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z\s]).{8,16}$/);
        },
        message: (prop) => `Password ${prop.value} is not in correct format`,
      },
    },
    passwordChangedAt: {
      type: Date,
    },
    passwordReseToken: {
      type: String,
    },
    passwordReseTokenExpiry: {
      type: Date,
    },
  },
  { timestamps: true }
);

userSchema.methods.validatePassword = async function (currentPassword, userPassword) {
  return await bcrypt.compare(currentPassword, userPassword);
};

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
