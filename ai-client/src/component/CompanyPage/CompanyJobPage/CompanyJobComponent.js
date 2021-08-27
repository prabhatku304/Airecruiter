import React from "react";
import CompanyJobCard from "./CompanyJobCard";

const CompanyJobComponent = () => {
  return (
    <div className="container">
      <div className="row">
        {[1, 2, 3, 4].map((ele, i) => (
          <div className="col-4" key={i}>
            <CompanyJobCard data={ele} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyJobComponent;
