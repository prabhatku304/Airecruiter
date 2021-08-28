import React from "react";
import { useHistory } from "react-router";
import { jobDetailRoute } from "../../container/route";

const CompanyCard = (props) => {
  const history = useHistory();
  const onChangeJobDetailRoute = (jobId) => {
    if (jobId) {
      history.push(jobDetailRoute(true, jobId));
    }
  };
  return (
    <div className="row">
      {props.data &&
        props.data.map((res) => (
          <div className="col-4">
            <div
              className="card cursor-pointer"
              onClick={() => onChangeJobDetailRoute(res._id)}
            >
              <div className="title-image">
                <img
                  style={{ width: 300, height: 200 }}
                  className="img-fluid"
                  src={
                    "https://beatest-blobs1.s3.ap-south-1.amazonaws.com/Activity+Inside+Banners/java+developer+card.jpg"
                  }
                  alt=""
                />
              </div>
              <div className="desc p-2">
                <div className="title">
                  <h3>{res.job_title}</h3>
                </div>
                <div className="description">
                  <p>{res.job_description}</p>
                </div>

                <div className="apply-btn">
                  <button
                    className="btn"
                    onClick={() => {
                      onChangeJobDetailRoute(res._id);
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export { CompanyCard };
