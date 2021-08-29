import React from "react";
import { McqTestCard } from "./McqTestCard";
import {
  UserStatusTestApi,
  UserSubmitTestApi,
  UserInterviewMailApi,
} from "../../_Api/User";
import { withRouter, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { technicalTestSubmitAction } from "../../../redux/action/userTest";

const McqTestPageContent = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.user);

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
      <div className="container test-container">
        <McqTestCard SubmitTest={onSumbitTechnicalTest} />
      </div>
    </div>
  );
};

export { McqTestPageContent };
