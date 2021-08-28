const { decodeToken } = require("../lib/common_util");

const db = require("../models");

exports.userProfileUpdate = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    let { body } = req;
    if (user) {
      let profile = await db.UserProfile.findOneAndUpdate(
        { user: user._id },
        body
      );
      if (!profile) {
        profile = await db.UserProfile.create(body);
        profile.user = user._id;
      }
      await profile.save();

      res.send(profile);
    } else {
      return next({
        message: "Aunauthorization",
        status: 401,
      });
    }
  } catch (err) {
    return next({
      message: err.message || "Something went wrong",
    });
  }
};
exports.userProfile = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    let { body } = req;
    if (user) {
      let profile = await db.UserProfile.findOne({ user: user._id });
      if (!profile) {
        profile = await db.UserProfile.create(body);
        profile.user = user._id;
      }
      await profile.save();

      res.send(profile);
    } else {
      return next({
        message: "Aunauthorization",
        status: 401,
      });
    }
  } catch (err) {
    return next({
      message: err.message || "Something went wrong",
    });
  }
};
