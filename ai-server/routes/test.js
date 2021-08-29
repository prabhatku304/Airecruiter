const express = require("express");
const router = express.Router();
const {
  CompanyInterviewQuestion,
  UserCompanyTest,
} = require("../handlers/company");
const { InterviewMailUrl } = require("../handlers/score");
const { candidateTechnicalScore } = require("../handlers/test");

router.get("/company/:c_id/interview", CompanyInterviewQuestion);
router.post("/company/:id/add", UserCompanyTest);
router.post("/user/interview-link", InterviewMailUrl);

router.put("/technical-test", candidateTechnicalScore);
module.exports = router;
