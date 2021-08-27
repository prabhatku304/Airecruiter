import React from "react";

const CompanyJobCard = ({ data }) => {
  return (
    <div className="">
      <div className="card" style="width: 18rem;">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{data && data.job_title}</h5>
          <p className="card-text">{data && data.job_description}</p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CompanyJobCard;
