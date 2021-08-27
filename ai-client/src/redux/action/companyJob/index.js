import { reduxPayload } from "../base";
import { apiClient } from "../../../service/apiClient";

const {
  getCompanyJobsApiRoute,
  addCompanyJobsApiRoute,
} = require("../../apiRoute/companyJob");
const {
  COMPANY_JOBS_GET_PENDING,
  COMPANY_JOBS,
  COMPANY_JOBS_ADD_PENDING,
} = require("./type");

const companyJobGetAction = (query) => {
  const url = getCompanyJobsApiRoute(query);
  return (dispatch) => {
    dispatch(reduxPayload(COMPANY_JOBS_GET_PENDING, true));
    apiClient({ method: "GET", url: url })
      .then((res) => {
        dispatch(reduxPayload(COMPANY_JOBS, res.data));
        dispatch(reduxPayload(COMPANY_JOBS_GET_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(COMPANY_JOBS_GET_PENDING, false));
      });
  };
};

const companyJobAddAction = (data, callback) => {
  const url = addCompanyJobsApiRoute();
  return (dispatch) => {
    dispatch(reduxPayload(COMPANY_JOBS_ADD_PENDING, true));
    apiClient({ method: "POST", url: url, data })
      .then((res) => {
        if (callback) {
          callback();
        }
        dispatch(reduxPayload(COMPANY_JOBS_ADD_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(COMPANY_JOBS_ADD_PENDING, false));
      });
  };
};

export { companyJobAddAction, companyJobGetAction };
