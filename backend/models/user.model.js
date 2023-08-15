const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

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
    passwordConfirm: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: function (pwd) {
          return String(pwd).match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z\s]).{8,16}$/);
        },
        message: (prop) => `Confirm Password ${prop.value} is not in correct format`,
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
    verified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: Number,
    },
    otp_expiry_time: {
      type: Date,
    },
  },
  { timestamps: true }
);

// to validate the hashed password
userSchema.methods.validatePassword = async function (currentPassword, userPassword) {
  return await bcrypt.compare(currentPassword, userPassword);
};

// to validate the hashed OTP
userSchema.methods.validateOTP = async function (currentOTP, userOTP) {
  return await bcrypt.compare(currentOTP, userOTP);
};

userSchema.methods.createPasswordResetToken = async function () {
  // create a reset token
  const resetToken = crypto.randomBytes(32).toString("hex");
  // save hashed reset token
  this.passwordReseToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.passwordReseTokenExpiry = Date.now() + 10 * 60 * 1000; // 10 mins

  return resetToken;
};

userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return JWTTimeStamp < changedTimeStamp;
  }

  // FALSE MEANS NOT CHANGED
  return false;
};

// before saving the OTP, hash it using bcrypt and then store it.
userSchema.pre("save", async function (next) {
  // only run this function when otp is modified.
  if (!this.isModified("otp")) return next();

  this.otp = await bcrypt.hash(this.otp, 12);
  next();
});

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password") || !this.password) return next();

  // Hash the password with salt rounds of 12
  this.password = await bcrypt.hash(this.password, 12);

  next();
});

// userSchema.pre("save", function (next) {
//   if (!this.isModified("password") || this.isNew || !this.password) return next();

//   this.passwordChangedAt = Date.now() - 1000;
//   next();
// });

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
