const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  startupName: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  fcmToken: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
