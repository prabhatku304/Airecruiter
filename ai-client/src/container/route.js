export const companyJobRoute = () => {
  return "/company/jobs";
};

export const companyJobDetailRoute = (isParams, jobId) => {
  if (isParams) {
    return `/company/job/${jobId}`;
  }
  return "/company/job/:jobId";
};
export const technicalTestRoute = (isParams, jobId, userId) => {
  if (isParams) {
    return `/technical-test/${jobId}/${userId}`;
  }
  return "/technical-test/:jobId/:userId";
};
export const personalityTestRoute = (isParams, jobId, userId) => {
  if (isParams) {
    return `/personality-test/${jobId}/${userId}`;
  }
  return "/personality-test/:jobId/:userId";
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
export const candidateDashboardRoute = () => {
  return "/dashboard";
};
