const mongoose = require("mongoose");

const UserDeatilSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  profile_photo: { type: String },
});

const CreatorDeatilSchema = UserDeatilSchema;

const FileSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  url: {
    type: String,
    trim: true,
    required: true,
  },
  mime_type: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = {
  FileSchema,
  CreatorDeatilSchema,
};
