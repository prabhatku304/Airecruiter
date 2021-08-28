export const companyJobRoute = () => {
  return "/company/jobs";
};

export const companyJobDetailRoute = (isParams, jobId) => {
  if (isParams) {
    return `/company/job/${jobId}`;
  }
  return "/company/job/:jobId";
};
export const jobDetailRoute = (isParams, jobId) => {
  if (isParams) {
    return `/job/${jobId}`;
  }
  return "/job/:jobId";
};
export const uploadResumeRoute = () => {
  return "/upload/resume";
};
export const candidateProfileRoute = () => {
  return "/profile";
};
