import { reduxPayload } from "../base";
import { apiClient } from "../../../service/apiClient";
import { toastAction } from "../toastAction";
import { JOB_APPLY_PENDING } from "../candidateJob/type";

const {
  getCompanyJobsApiRoute,
  addCompanyJobsApiRoute,
  getCompanyJobDetailApiRoute,
  applyJobApiRoute,
  getJobAppliedCandidateApiRoute,
  jobShortlistApiRoute,
} = require("../../apiRoute/companyJob");
const {
  COMPANY_JOBS_GET_PENDING,
  COMPANY_JOBS,
  COMPANY_JOBS_ADD_PENDING,
  COMPANY_JOB_DETAIL,
  COMPANY_JOB_DETAIL_GET_PENDING,
  COMPANY_JOBS_APPLY_PENDING,
  COMPANY_JOB_APPLIED,
  JOB_SHORTLISTING_PENDING,
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
        toastAction.success("Job Created");
      })
      .catch((err) => {
        dispatch(reduxPayload(COMPANY_JOBS_ADD_PENDING, false));
        toastAction.error(err);
      });
  };
};

const companyJobDetailGetAction = (jobId) => {
  const url = getCompanyJobDetailApiRoute(jobId);
  return (dispatch) => {
    dispatch(reduxPayload(COMPANY_JOB_DETAIL_GET_PENDING, true));
    apiClient({ method: "GET", url: url })
      .then((res) => {
        dispatch(reduxPayload(COMPANY_JOB_DETAIL, res.data));
        dispatch(reduxPayload(COMPANY_JOB_DETAIL_GET_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(COMPANY_JOB_DETAIL_GET_PENDING, false));
      });
  };
};
const companyJobApplyAction = (data) => {
  const url = applyJobApiRoute();
  return (dispatch) => {
    dispatch(reduxPayload(JOB_APPLY_PENDING, true));
    apiClient({ method: "POST", url: url, data })
      .then((res) => {
        dispatch(reduxPayload(JOB_APPLY_PENDING, false));
        toastAction.success("Applied Successfully");
      })
      .catch((err) => {
        dispatch(reduxPayload(JOB_APPLY_PENDING, false));
        toastAction.error(err);
      });
  };
};

const jobAppliedCandidateAction = (query) => {
  const url = getJobAppliedCandidateApiRoute(query);
  return (dispatch) => {
    apiClient({ method: "GET", url: url })
      .then((res) => {
        dispatch(reduxPayload(COMPANY_JOB_APPLIED, res.data));

        dispatch(reduxPayload(COMPANY_JOBS_APPLY_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(COMPANY_JOBS_APPLY_PENDING, false));
      });
  };
};
const jobShortlistingAction = (data, callback) => {
  const url = jobShortlistApiRoute();
  return (dispatch) => {
    dispatch(reduxPayload(JOB_SHORTLISTING_PENDING, true));

    apiClient({ method: "PUT", url: url, data })
      .then((res) => {
        dispatch(reduxPayload(JOB_SHORTLISTING_PENDING, false));
        if (callback) {
          callback();
        }
        toastAction.success("Updated Successfully ");
      })
      .catch((err) => {
        dispatch(reduxPayload(JOB_SHORTLISTING_PENDING, false));
        toastAction.error(err);
      });
  };
};
const jobSelectAction = (data, callback) => {
  const url = "/job-select";
  return (dispatch) => {
    dispatch(reduxPayload(JOB_SHORTLISTING_PENDING, true));

    apiClient({ method: "PUT", url: url, data })
      .then((res) => {
        dispatch(reduxPayload(JOB_SHORTLISTING_PENDING, false));
        if (callback) {
          callback();
        }
        toastAction.success("Updated Successfully ");
      })
      .catch((err) => {
        dispatch(reduxPayload(JOB_SHORTLISTING_PENDING, false));
        toastAction.error(err);
      });
  };
};
export {
  companyJobAddAction,
  companyJobGetAction,
  companyJobDetailGetAction,
  companyJobApplyAction,
  jobAppliedCandidateAction,
  jobShortlistingAction,
  jobSelectAction,
};
