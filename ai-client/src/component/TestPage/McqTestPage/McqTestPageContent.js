import React from "react";
import { McqTestCard } from "./McqTestCard";
import { withRouter, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { technicalTestSubmitAction } from "../../../redux/action/userTest";
import { PageSpinner } from "../../UserProfile/PageSpinner";

const McqTestPageContent = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isTestSubmitPending = useSelector(
    (state) => state.test.isTechnicalTestSubmitPending
  );
  const onSumbitTechnicalTest = async (score) => {
    if (params && params.jobId) {
      const data = {
        technical_score: score,
        company_job: params.jobId,
      };
      await dispatch(technicalTestSubmitAction(data, onGoBack));
    }
  };
  const onGoBack = () => {
    setTimeout(window.close, 2000);
  };
  return (
    <div className="p-0 m-0">
      <PageSpinner isLoading={isTestSubmitPending} />
      <div className="container test-container">
        <McqTestCard SubmitTest={onSumbitTechnicalTest} />
      </div>
    </div>
  );
};

export { McqTestPageContent };
