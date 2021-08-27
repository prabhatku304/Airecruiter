const express = require("express");
const db = require("../models");
const { getCompanyJob, createJob } = require("../handlers/job");
const router = express.Router();

router.get("/company/jobs", getCompanyJob);
router.post("/company/job", createJob);

module.exports = router;
