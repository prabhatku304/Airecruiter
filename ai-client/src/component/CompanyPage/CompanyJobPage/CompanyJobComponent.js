import React from "react";
import CompanyJobCard from "./CompanyJobCard";
import { useSelector } from "react-redux";

const CompanyJobComponent = () => {
  const companyJobs = useSelector((state) => state.companyJob.companyJob);
  return (
    <div className="container my-5">
      <div className="row">
        {companyJobs &&
          companyJobs.map((ele, i) => (
            <div className="col-4 my-3" key={i}>
              <CompanyJobCard data={ele} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CompanyJobComponent;
