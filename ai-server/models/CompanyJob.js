const mongoose = require("mongoose");
const {
  FileSchema,
  CreatorDeatilSchema,
  CompanyDeatilSchema,
} = require("./BaseSchema");

const companyJobSchema = new mongoose.Schema(
  {
    job_title: {
      type: String,
      required: true,
      trim: true,
    },

    job_description: {
      type: String,
      trim: true,
    },
    skill_required: {
      type: String,
      trim: true,
    },
    url: [FileSchema],

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    creator: {
      type: CreatorDeatilSchema,
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

const CompanyJob = mongoose.model("CompanyJob", companyJobSchema);
module.exports = CompanyJob;
