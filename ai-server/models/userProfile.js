const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  college: {
    type: String,
    default: "",
  },
  skills: {
    type: String,
    default: "",
  },
  languages: {
    type: String,
    default: "",
  },
  experience: {
    type: String,
    default: "",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  contact: {
    type: Number,
  },
});

const UserProfile = mongoose.model("UserProfile", userSchema);
module.exports = UserProfile;
