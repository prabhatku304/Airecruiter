require("dotenv").load;
const db = require("../models");
const jwt = require("jsonwebtoken");
const { spawn } = require("child_process");
const { signToken, decodeToken } = require("../lib/common_util");

exports.UserRegister = async (req, res, next) => {
  try {
    const { body } = req;
    let user = await db.User.create(body);
    if (body.user_type === "COMPANY") {
      body.creator = {
        _id: user._id,
        name: user.name,
      };
      let company = await db.Company.create(body);
      user.company = company._id;
    }
    // let tempProfile = await db.UserProfile.create({ user: user._id });
    // user.profile = tempProfile._id;
    // await tempProfile.save();

    let token = await signToken(user);
    user.token = token;
    await user.save();
    return res.status(200).json(user);
  } catch (err) {
    return next({
      status: 402,
      message: err.message,
    });
  }
};

exports.UserLogin = async (req, res, next) => {
  try {
    let user = await db.User.findOne({ email: req.body.email });

    if (user) {
      let isMatch = await user.Compare(req.body.password);
      if (isMatch) {
        let token = await signToken(user);
        user.token = token;
        return res.status(200).json(user);
      }
      return next({
        status: 404,
        message: "wrong password",
      });
    }
    return next({
      status: 404,
      message: "user does not exist",
    });
  } catch (err) {
    return next({
      status: 404,
      message: err.message,
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    user = await db.User.findById(user._id);
    res.send(user);
  } catch (err) {
    return next({
      status: 401,
      message: err.message,
    });
  }
};
exports.UserData = async (req, res, next) => {
  try {
    let user = await db.User.findById(req.params.id);
    if (user) {
      res.send(user.company);
    } else {
      return next({
        status: 404,
        message: "user does not found",
      });
    }
  } catch (err) {
    return next({
      status: 404,
      message: err.message,
    });
  }
};

exports.UserProfile = async (req, res, next) => {
  try {
    let userProfile = await db.UserProfile.findOne({ user: req.params.id });
    userProfile.experience = req.body.experience;
    userProfile.skills = req.body.skills;
    userProfile.name = req.body.name;
    userProfile.languages = req.body.languages;
    userProfile.email = req.body.email;
    userProfile.college = req.body.college;
    userProfile.contact = req.body.contact;
    if (req.body.skills || req.body.experience) {
      let process = await spawn("python", [
        "ml/Resume_analyser/analyser.py",
        userProfile.skills,
        userProfile.experience,
      ]);
      process.stdout.on("data", function (data) {
        console.log(data.toString());
        userProfile.score = data.toString();
        userProfile.save();

        res.send(userProfile);
      });
      process.stderr.on("data", function (data) {
        console.log(data.toString());
      });
    } else {
      userProfile.save();

      res.send(userProfile);
    }
  } catch (err) {
    return next({
      status: 404,
      message: err.message,
    });
  }
};

exports.UserProfileRequest = async (req, res, next) => {
  try {
    let userProfile = await db.UserProfile.findOne({ user: req.params.id });
    let user = await db.User.findById(req.params.id);
    console.log("hello");
    if (userProfile) {
      res.send(userProfile);
    } else {
      let tempProfile = await db.UserProfile.create({ user: user._id });
      user.profile = tempProfile._id;
      await tempProfile.save();
      res.send(tempProfile);
    }
  } catch (err) {
    return next({
      status: 404,
      message: err.message,
    });
  }
};
