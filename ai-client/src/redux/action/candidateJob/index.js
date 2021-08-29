import { reduxPayload } from "../base";
import { apiClient } from "../../../service/apiClient";
import { CANDIDATE_APPLIED_JOB } from "./type";

const candidateAppliedJobGetAction = () => {
  const url = "/candidate/job-applied";
  return (dispatch) => {
    // dispatch(reduxPayload(CANDIDATE_APPLIED_JOB_GET_PENDING, true));
    apiClient({ method: "GET", url: url })
      .then((res) => {
        dispatch(reduxPayload(CANDIDATE_APPLIED_JOB, res.data));
        // dispatch(reduxPayload(CANDIDATE_APPLIED_JOB_GET_PENDING, false));
      })
      .catch((err) => {
        // dispatch(reduxPayload(CANDIDATE_APPLIED_JOB_GET_PENDING, false));
      });
  };
};

export { candidateAppliedJobGetAction };
