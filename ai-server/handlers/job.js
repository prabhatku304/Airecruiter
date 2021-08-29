const db = require("../models");
const { decodeToken } = require("../lib/common_util");
require("dotenv").load;
const nodemailer = require("nodemailer");
const { spawn } = require("child_process");

const smtpNodemailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "prabhat.coffe@gmail.com",
    pass: process.env.PASS,
  },
});

exports.createJob = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    let { body } = req;

    if (user) {
      body.creator = {
        _id: user._id,
        name: user.name,
      };
      let job = await db.CompanyJob.create(body);
      res.send(job);
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
exports.applyJob = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    let { body } = req;
    if (user) {
      body.user_id = user._id;
      let job = await db.CandidateToJob.findOne({
        $and: [{ company_job: body.company_job }, { user_id: user._id }],
      });
      let userProfile = await db.UserProfile.findOne({ user: user._id });
      if (job) {
        return next({
          message: "you have already applied",
          status: 406,
        });
      }
      let process = await spawn("python", [
        "ml/resume_score.py",
        userProfile.skills,
        userProfile.experience,
        body.job_description,
      ]);
      let score;
      process.stdout.on("data", async function (data) {
        score = data.toString();
        body.resume_score = score;
        job = await db.CandidateToJob.create(body);
        await job.save();
        res.send(job);
      });

      process.stderr.on("data", function (data) {
        console.log(data);
      });
    } else {
      return next({
        message: "Aunauthorization",
        status: 401,
      });
    }
  } catch (err) {
    console.log(err);
    return next({
      message: err.message || "Something went wrong",
    });
  }
};

exports.getCandidateAppliedJob = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    let { query } = req;
    if (user) {
      let job = await db.CandidateToJob.find(query).populate("user_id");
      res.send(job);
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

exports.getJobApplied = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    if (user) {
      let job = await db.CandidateToJob.find({ user_id: user._id }).populate(
        "company_job"
      );
      res.send(job);
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
exports.getCompanyJob = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    let { query } = req;
    if (user) {
      let job = await db.CompanyJob.find(query);
      res.send(job);
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

exports.getCompanyJobDetail = async (req, res, next) => {
  try {
    let { params } = req;
    let job = await db.CompanyJob.findById(params.jobId);
    res.send(job);
  } catch (err) {
    return next({
      message: err.message || "Something went wrong",
    });
  }
};

exports.shortlistCandidate = async (req, res, next) => {
  try {
    let { body } = req;
    console.log(body);
    let url = `http://localhost:3000/user/interview/`;
    let emailId = [];
    if (body && body.length > 0) {
      body.map(async (ele) => {
        let job = await db.CandidateToJob.findById(ele._id);
        job.is_shortlisted = ele.is_shortlisted;
        await job.save();
        if (ele && ele.user_id && ele.user_id.email) {
          emailId.push(ele.user_id.email);
        }
      });
    }
    let mailOptions = {
      to: emailId,
      subject: "Selected for next round",
      html: `<h5>Selected for next round</h5>`,
    };

    smtpNodemailer.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        return res.status(400).json({
          message: "err",
        });
      } else {
        console.log(info);
        return res.status(200).json({
          message: "done",
        });
      }
    });
  } catch (err) {
    return next({
      message: err.message || "Something went wrong",
    });
  }
};

exports.selectCandidate = async (req, res, next) => {
  try {
    let { body } = req;
    let job = await db.CandidateToJob.findById(body.candJobId);
    job.is_selected = body.is_selected;
    await job.save();
    res.send(job);
  } catch (err) {
    return next({
      message: err.message || "Something went wrong",
    });
  }
};
