require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  app = express();

const errorHandler = require("./handlers/error");
const UserRoutes = require("./routes/user");
const ResumeRoutes = require("./routes/resume");
const CompanyRoutes = require("./routes/company");
const TestRoutes = require("./routes/test");
const CompanyJobRoutes = require("./routes/companyJob");

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api", UserRoutes, CompanyRoutes, TestRoutes, CompanyJobRoutes);
app.use("/api", ResumeRoutes);

app.use(function (req, res, next) {
  let err = new Error("not found");
  err.status = 404;
  next(err);
});
app.use(errorHandler);

app.listen(5000, () => {
  console.log("done");
});
