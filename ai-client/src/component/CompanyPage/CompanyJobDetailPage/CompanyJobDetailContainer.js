import React, { useEffect } from "react";
import CompanyJobDetailComponent from "./CompanyJobDetailComponent";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  jobAppliedCandidateAction,
  jobShortlistingAction,
} from "../../../redux/action/companyJob";

const CompanyJobDetailContainer = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const appliedData = useSelector(
    (state) => state.companyJob.jobAppliedCandidate
  );
  const onGetJobAppliedCandidate = async () => {
    if (params && params.jobId) {
      const data = {
        company_job: params.jobId,
      };
      await dispatch(jobAppliedCandidateAction(data));
    }
  };
  const onJobShortlisting = async (data) => {
    await dispatch(jobShortlistingAction(data, onGetJobAppliedCandidate));
  };
  useEffect(() => {
    onGetJobAppliedCandidate();
  }, []);
  return (
    <section>
      <CompanyJobDetailComponent
        appliedData={appliedData}
        onJobShortlisting={onJobShortlisting}
      />
    </section>
  );
};

export default CompanyJobDetailContainer;
