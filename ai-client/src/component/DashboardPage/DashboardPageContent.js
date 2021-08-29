import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import {
  technicalTestRoute,
  personalityTestRoute,
} from "../../container/route";

const DashboardPageContent = (props) => {
  const user = useSelector((state) => state.user.user);
  const onStartTechnicalTest = (jobId) => {
    let url = technicalTestRoute(true, jobId, user._id);
    window.open(url, "_blank");
  };
  const onStartPersonalityTest = (jobId) => {
    let url = personalityTestRoute(true, jobId, user._id);
    window.open(url, "_blank");
  };
  return (
    <div className="container">
      <div className="">
        {props.data &&
          props.data.map((res) => (
            <>
              <div className="card">
                <div className="company-img p-0 m-0">
                  {/* <img
                    src=''
                    alt=""
                    className="img-fluid"
                  /> */}
                </div>
                <div className="container">
                  <div className="">
                    <h1>{res.company_job && res.company_job.job_title}</h1>
                  </div>
                  <div className="">
                    <p>{res.company_job && res.company_job.job_description}</p>
                  </div>
                  <div className="">
                    <p>
                      {res.company_job &&
                        res.company_job.company &&
                        res.company_job.company.company_name}
                    </p>
                  </div>
                  {!props.isApplied && !props.isSelected && (
                    <div className="d-flex">
                      <div className=" update-btn mx-3">
                        {!res.technical_score && (
                          <button
                            className="btn"
                            onClick={() => onStartTechnicalTest(res._id)}
                          >
                            Start Technical Test
                          </button>
                        )}
                      </div>
                      <div className=" update-btn">
                        <button
                          className="btn"
                          onClick={() => onStartPersonalityTest(res._id)}
                        >
                          Start Personality Test
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <hr />
            </>
          ))}
      </div>
    </div>
  );
};

export { DashboardPageContent };
