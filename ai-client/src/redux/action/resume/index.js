import { toastAction } from "../toastAction";

const { apiClient } = require("../../../service/apiClient");
const { reduxPayload } = require("../base");
const { RESUME_UPLOAD_PENDING } = require("./type");

const uploadResumeAction = (data, callback) => {
  const url = "/upload/resume";

  return (dispatch) => {
    dispatch(reduxPayload(RESUME_UPLOAD_PENDING, true));
    apiClient({ method: "POST", url: url, data: data })
      .then((res) => {
        dispatch(reduxPayload(RESUME_UPLOAD_PENDING, false));
        if (callback) {
          callback();
        }
        toastAction.success("Successfully Uploaded");
      })
      .catch((err) => {
        console.log(err);
        dispatch(reduxPayload(RESUME_UPLOAD_PENDING, false));
        toastAction.error(err);
      });
  };
};

export { uploadResumeAction };
