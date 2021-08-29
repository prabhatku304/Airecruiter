import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { technicalTestRoute } from "../../container/route";

const DashboardPageContent = (props) => {
  const user = useSelector((state) => state.user.user);
  const onStartTechnicalTest = (jobId) => {
    let url = technicalTestRoute(true, jobId, user._id);
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
                  <img
                    src={
                      res.url ||
                      "https://si.wsj.net/public/resources/images/BN-JP042_melros_P_20150728024345.jpg"
                    }
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="container">
                  <div className="">
                    <h1>{res.job_title}</h1>
                  </div>
                  <div className="">
                    <p>{res.job_description}</p>
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
                          onClick={() => props.onStartTest(res._id)}
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
