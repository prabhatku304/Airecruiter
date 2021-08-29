const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
//mongodb://localhost/airecruiter
//mongodb+srv://prabhat:prabhat@123@cluster0.xazpf.mongodb.net/ai
mongoose.connect("mongodb+srv://prabhat:prabhat@123@cluster0.xazpf.mongodb.net/ai-rec", {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

module.exports.User = require("./user");
module.exports.UserProfile = require("./userProfile");
module.exports.Test = require("./Test");
module.exports.Company = require("./Company");
module.exports.CompanyJob = require("./CompanyJob");
module.exports.EmployeeToJob = require("./EmployeeToJob");
module.exports.CandidateToJob = require("./CandidateToJob");
