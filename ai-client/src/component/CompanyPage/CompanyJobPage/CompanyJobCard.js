import React from "react";

const CompanyJobCard = ({ data }) => {
  return (
    <div className="">
      <div className="card">
        <img
          className="card-img-top"
          src="img-fluid h-100 w-100"
          src="https://beatest-blobs1.s3.ap-south-1.amazonaws.com/Activity+Inside+Banners/java+developer+card.jpg"
          alt=""
        />
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
