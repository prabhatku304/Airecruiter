import React, { useState, useEffect } from "react";
import CandidateCard from "./CandidateCard";

const CompanyJobDetailComponent = ({ appliedData, onJobShortlisting }) => {
  const [data, setData] = useState([]);
  const onFilterData = (type) => {
    let tempData = [...appliedData];
    if (type === "shortlisted") {
      tempData = tempData.filter((ele) => ele.is_shortlisted === true);
    } else if (type === "selected") {
      tempData = tempData.filter((ele) => ele.is_selected === true);
    } else {
      tempData = tempData;
    }
    setData(tempData);
  };
  useEffect(() => {
    setData(appliedData);
  }, [appliedData]);
  const onShortlistedCandidate = () => {
    onJobShortlisting(data);
  };
  return (
    <div className="container">
      <div className="">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => onFilterData("all")}
            >
              Recomendations
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => onFilterData("all")}
            >
              Applications
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => onFilterData("shortlisted")}
            >
              Shortlisted
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
              onClick={() => onFilterData("selected")}
            >
              Selected Candidate
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <CandidateCard data={data} setData={setData} />
          </div>
          <div
            class="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <CandidateCard data={data} setData={setData} isShortlisted={true} />
          </div>
          <div
            class="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <CandidateCard data={data} setData={setData} isSelected={true} />
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary" onClick={onShortlistedCandidate}>
            Shortlist
          </button>
        </div>
      </div>
    </div>
  );
};
export default CompanyJobDetailComponent;
