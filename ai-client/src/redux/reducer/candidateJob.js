import {
  CANDIDATE_APPLIED_JOB,
  CANDIDATE_APPLIED_JOB_GET_PENDING,
  CANDIDATE_APPLIED_JOB_ERROR,
  JOB_APPLY_PENDING,
} from "../action/candidateJob/type";

const DEFAULT_STATE = {
  appliedJob: null,
  isCandidateAppliedJobPending: false,
  error: null,
};

export const candidateJobReducer = (
  state = DEFAULT_STATE,
  { type, payload, error }
) => {
  switch (type) {
    case CANDIDATE_APPLIED_JOB:
      return {
        ...state,
        appliedJob: payload,
      };
    case CANDIDATE_APPLIED_JOB_GET_PENDING:
      return {
        ...state,
        isCandidateAppliedJobPending: payload,
      };
    case JOB_APPLY_PENDING:
      return {
        ...state,
        isCandidateAppliedJobPending: payload,
      };
    case CANDIDATE_APPLIED_JOB_ERROR:
      return {
        ...state,
        error,
      };

    default:
      return state;
  }
};
