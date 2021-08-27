import queryString from "query-string";

export const getCompanyJobsApiRoute = (value) => {
  const query = queryString.stringify(value);
  return `/company/jobs?${query}`;
};

export const addCompanyJobsApiRoute = () => {
  return "/company/job";
};
