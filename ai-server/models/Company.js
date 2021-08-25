const mongoose = require("mongoose");
const { FileSchema, CreatorDeatilSchema } = require("./BaseSchema");

const companySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    url: [FileSchema],
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

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
