const db = require("../models");
const { decodeToken } = require("../lib/common_util");

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
      let job = await db.CandidateToJob.create(body);
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

exports.getCandidateAppliedJob = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    let { query } = req;
    if (user) {
      let job = await db.CandidateToJob.find(query).populate("company_job");
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
