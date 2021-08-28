import React from "react";

const JobDetailComponent = ({ data, onUserApplyJob }) => {
  return (
    <div className="">
      <div className="">
        <img
          src="https://beatest-blobs1.s3.ap-south-1.amazonaws.com/Activity+Outside+Banners/java+developer+banner.png"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="container">
        <div className="my-5">
          <div className="">
            <div className="row">
              <div className="col-8">
                <div className="card container p-2">
                  <div className="">
                    <h5>Job Title: {data && data.job_title}</h5>
                  </div>
                  <div className="my-3">
                    <h6>Job Description:</h6>
                    <div className="mx-2">
                      <p>{data && data.job_description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <div className="o-hidden p-2">
                      <button
                        className="btn btn-primary"
                        onClick={onUserApplyJob}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailComponent;
