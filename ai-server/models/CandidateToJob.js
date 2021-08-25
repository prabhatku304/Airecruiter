const mongoose = serviceLocator.get("mongoose");

const CandidateToJobSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    company_job_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CompanyJob",
      required: true,
    },

    resume_score: {
      type: Number,
    },
    test_score: {
      type: Number,
    },
    is_shortlisted: {
      type: Boolean,
    },
    is_selected: {
      type: Boolean,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CandidateToJob", CandidateToJobSchema);
