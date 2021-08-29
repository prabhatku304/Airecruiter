const express = require("express");
const db = require("../models");
const {
  getCompanyJob,
  createJob,
  getCompanyJobDetail,
  applyJob,
  getCandidateAppliedJob,
  shortlistCandidate,
  getJobApplied,
  selectCandidate,
} = require("../handlers/job");
const router = express.Router();

/**
 * Get company Jobs
 */
router.get("/company/jobs", getCompanyJob);
/**
 * Create company Job
 */
router.post("/company/job", createJob);
/**
 * Get details of company job
 */
router.get("/company-job/:jobId", getCompanyJobDetail);

/**
 * apply for job
 */

router.post("/job-apply", applyJob);

/**
 * Get Candidate Which applied for job
 */

router.get("/company/applied-job", getCandidateAppliedJob);

/**
 * Shortlist the candidate
 */
router.put("/job-shortlist", shortlistCandidate);
/**
 * Select or reject the candidate
 */

router.put("/job-select", selectCandidate);
/**
 * Get jobs which candidate applied
 */

router.get("/candidate/job-applied", getJobApplied);
module.exports = router;
