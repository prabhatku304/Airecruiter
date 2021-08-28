import queryString from "query-string";

export const getCompanyJobsApiRoute = (value) => {
  const query = queryString.stringify(value);
  return `/company/jobs?${query}`;
};
export const getJobAppliedCandidateApiRoute = (value) => {
  const query = queryString.stringify(value);
  return `/company/applied-job?${query}`;
};
export const getCompanyJobDetailApiRoute = (value) => {
  return `/company-job/${value}`;
};
export const jobShortlistApiRoute = () => {
  return `/job-shortlist`;
};
export const applyJobApiRoute = () => {
  return `/job-apply`;
};
export const addCompanyJobsApiRoute = () => {
  return "/company/job";
};
