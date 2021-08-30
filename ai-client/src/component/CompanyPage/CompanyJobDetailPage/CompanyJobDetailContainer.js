import React, { useEffect } from "react";
import CompanyJobDetailComponent from "./CompanyJobDetailComponent";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  jobAppliedCandidateAction,
  jobShortlistingAction,
  recommendCandidateGetAction,
  candidateShortListAction,
} from "../../../redux/action/companyJob";

const CompanyJobDetailContainer = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const recData = useSelector((state) => state.companyJob.recommendCandidate);
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
    await dispatch(recommendCandidateGetAction());
  };
  const onJobShortlisting = async (data) => {
    await dispatch(jobShortlistingAction(data, onGetJobAppliedCandidate));
  };
  const onShortlistRecCandidate = async (data) => {
    await dispatch(candidateShortListAction(data, window.location.reload));
  };
  useEffect(() => {
    onGetJobAppliedCandidate();
  }, []);
  return (
    <section>
      <CompanyJobDetailComponent
        appliedData={appliedData}
        onJobShortlisting={onJobShortlisting}
        recData={recData}
        onShortlistRecCandidate={onShortlistRecCandidate}
      />
    </section>
  );
};

export default CompanyJobDetailContainer;
