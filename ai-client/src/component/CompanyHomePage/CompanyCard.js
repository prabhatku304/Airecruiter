import React from "react";

const CompanyCard = (props) => {
  return (
    <div className="row">
      {props.data &&
        props.data.map((res) => (
          <div className="col-4">
            <div className="card">
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
                      props.onApply(res._id);
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
