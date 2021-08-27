const mongoose = require("mongoose");

const EmployeeToJobSchema = new mongoose.Schema(
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

    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EmployeeToJob", EmployeeToJobSchema);
