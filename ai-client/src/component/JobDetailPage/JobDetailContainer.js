import React, { useEffect } from "react";
import JobDetailComponent from "./JobDetailComponent";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  companyJobDetailGetAction,
  companyJobApplyAction,
} from "../../redux/action/companyJob";
import { PageSpinner } from "../UserProfile/PageSpinner";

const JobDetailContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobData = useSelector((state) => state.companyJob.companyJobDetail);
  const isApplyPending = useSelector(
    (state) => state.candidateJob.isCandidateAppliedJobPending
  );
  const onGetJobDetail = async () => {
    if (params && params.jobId) {
      await dispatch(companyJobDetailGetAction(params.jobId));
    }
  };
  const onUserApplyJob = async () => {
    if (params && params.jobId) {
      let data = {
        company_job: params.jobId,
        job_description: jobData && jobData.job_description,
      };
      await dispatch(companyJobApplyAction(data));
    }
  };
  console.log(isApplyPending);
  useEffect(() => {
    onGetJobDetail();
  }, []);
  return (
    <>
      <PageSpinner isLoading={isApplyPending} />
      <JobDetailComponent data={jobData} onUserApplyJob={onUserApplyJob} />
    </>
  );
};

export default JobDetailContainer;
