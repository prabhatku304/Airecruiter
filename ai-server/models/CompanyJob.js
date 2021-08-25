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

    description: {
      type: String,
      trim: true,
    },
    skill_required: {
      type: String,
      trim: true,
    },
    url: [FileSchema],

    company: {
      type: CompanyDeatilSchema,
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
