import {
  COMPANY_JOBS,
  COMPANY_JOBS_ADD_PENDING,
  COMPANY_JOBS_GET_PENDING,
  COMPANY_JOB_ERROR,
  COMPANY_JOB_DETAIL,
  COMPANY_JOB_APPLIED,
  JOB_SHORTLISTING_PENDING,
  RECOMMEND_CANDIDATE,
} from "../action/companyJob/type";

const DEFAULT_STATE = {
  companyJob: null,
  recommendCandidate: null,
  companyJobDetail: null,
  jobAppliedCandidate: null,
  isAuthenticated: null,
  isCompanyJobGetPending: false,
  isCompanyJobDetailGetPending: false,
  isJobShortlistingPending: false,
  isCompanyJobAddPending: false,
  error: null,
};

export const companyJobReducer = (
  state = DEFAULT_STATE,
  { type, payload, error }
) => {
  switch (type) {
    case COMPANY_JOBS:
      return {
        ...state,
        companyJob: payload,
      };
    case RECOMMEND_CANDIDATE:
      return {
        ...state,
        recommendCandidate: payload,
      };
    case COMPANY_JOB_APPLIED:
      return {
        ...state,
        jobAppliedCandidate: payload,
      };
    case COMPANY_JOB_DETAIL:
      return {
        ...state,
        companyJobDetail: payload,
      };
    case JOB_SHORTLISTING_PENDING:
      return {
        ...state,
        isJobShortlistingPending: payload,
      };
    case COMPANY_JOBS_ADD_PENDING:
      return {
        ...state,
        isCompanyJobAddPending: payload,
      };
    case COMPANY_JOBS_GET_PENDING:
      return {
        ...state,
        isCompanyJobGetPending: payload,
      };

    case COMPANY_JOB_ERROR:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};
