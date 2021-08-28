const express = require("express");
const db = require("../models");
const router = express.Router();
const multer = require("multer");
const ResumeParser = require("resume-parser");
const _ = require("lodash");
const {
  ResumeUpload,
  VideoUpload,
  AudioUpload,
} = require("../handlers/resume");
const { spawn } = require("child_process");

const storege = multer.diskStorage({
  destination: "./public/",
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, file.fieldname + Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storege });

router.post("/upload/resume", upload.single("file"), ResumeUpload);
router.post("/user/:id/video", upload.single("video"), VideoUpload);
router.post("/user/:id/audio", upload.single("audio"), AudioUpload);

router.get("/profile", async (req, res, next) => {
  try {
    let profile = await db.UserProfile.find({});
    res.send(profile);
  } catch (err) {
    return next(err);
  }
});
router.delete("/profile", async (req, res, next) => {
  try {
    let profile = await db.UserProfile.deleteMany();
    res.send(profile);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id/analyse", async (req, res, next) => {
  try {
    let profile = await db.UserProfile.findOne({ user: req.params.id });
    console.log(profile);
    let ProcessData = await spawn("python", [
      "ml/Resume_analyser/analyser.py",
      profile.skills,
      profile.experience,
    ]);
    ProcessData.stdout.on("data", (data) => {
      console.log(data.toString());
    });
    ProcessData.stderr.on("data", (err) => {
      console.log(err.toString());
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
