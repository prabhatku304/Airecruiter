const mongoose = require("mongoose");

const CandidateToJobSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    company_job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CompanyJob",
      required: true,
    },

    resume_score: {
      type: Number,
    },
    personality_score: {
      type: Number,
    },
    is_shortlisted: {
      type: Boolean,
      default: false,
    },
    is_selected: {
      type: Boolean,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    technical_score: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CandidateToJob", CandidateToJobSchema);
