export const companyJobRoute = () => {
  return "/company/jobs";
};

export const companyJobDetailRoute = (isParams, jobId) => {
  if (isParams) {
    return `/company/job/${jobId}`;
  }
  return "/company/job/:jobId";
};
