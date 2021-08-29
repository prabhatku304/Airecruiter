import React, { useEffect, useState } from "react";
import { DashboardPageContent } from "./DashboardPageContent";

import { PageSpinner } from "../UserProfile/PageSpinner";
import { useDispatch, useSelector } from "react-redux";
import { candidateAppliedJobGetAction } from "../../redux/action/candidateJob";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const appliedJob = useSelector((state) => state.candidateJob.appliedJob);
  const isJobGetPending = useSelector(
    (state) => state.candidateJob.isCandidateAppliedJobPending
  );
  const [data, setData] = useState([]);

  const onFilterData = (type) => {
    let tempData = [...appliedJob];
    if (type === "shortlisted") {
      tempData = tempData.filter((ele) => ele.is_shortlisted === true);
    } else if (type === "selected") {
      tempData = tempData.filter((ele) => ele.is_selected === true);
    } else {
      tempData = tempData;
    }
    setData(tempData);
  };
  const onStartTest = (id) => {
    alert(id);
    this.props.history.push(`/user/${id}/test`);
  };
  const onGetAppliedJob = async () => {
    await dispatch(candidateAppliedJobGetAction());
  };
  useEffect(() => {
    onGetAppliedJob();
  }, []);
  useEffect(() => {
    setData(appliedJob);
  }, [appliedJob]);
  return (
    <div className="p-0 m-0">
      <PageSpinner isLoading={isJobGetPending} />
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
            Applied
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
            Selected
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
          <DashboardPageContent
            data={data}
            onStartTest={onStartTest}
            isApplied={true}
          />
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <DashboardPageContent
            data={data}
            onStartTest={onStartTest}
            isShortlisted={true}
          />
        </div>
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <DashboardPageContent
            data={data}
            onStartTest={onStartTest}
            isSelected={true}
          />
        </div>
      </div>
    </div>
  );
};

export { DashboardPage };
