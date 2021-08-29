const db = require("../models");
const { decodeToken } = require("../lib/common_util");

exports.candidateTechnicalScore = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    let { body } = req;
    if (user) {
      let job = await db.CandidateToJob.findOne({
        $and: [
          {
            _id: body.company_job,
          },
          { user_id: user._id },
        ],
      });
      if (!job) {
        return next({
          message: "Test Not found",
          status: 403,
        });
      }
      job.technical_score = body.technical_score;
      await job.save();
      res.send(job);
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

exports.candidatePersonalityScore = async (req, res, next) => {
  try {
    let user = await decodeToken(req);
    let { body } = req;
    if (user) {
      let job = await db.CandidateToJob.findOne({
        $and: [
          {
            _id: body.company_job,
          },
          { user_id: user._id },
        ],
      });
      if (!job) {
        return next({
          message: "Test Not found",
          status: 403,
        });
      }
      job.personality_score = body.personality_score;
      await job.save();
      res.send(job);
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
