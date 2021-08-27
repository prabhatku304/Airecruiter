import {
  COMPANY_JOBS,
  COMPANY_JOBS_ADD_PENDING,
  COMPANY_JOBS_GET_PENDING,
  COMPANY_JOB_ERROR,
} from "../action/companyJob/type";

const DEFAULT_STATE = {
  companyJob: null,
  isAuthenticated: null,
  isCompanyJobGetPending: false,
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
