import { toastAction } from "../toastAction";

const { reduxPayload } = require("../base");
const { apiClient } = require("../../../service/apiClient");
const {
  TECHNICAL_TEST_SUBMIT_PENDING,
  PERSONALITY_TEST_SUBMIT_PENDING,
} = require("./type");

const technicalTestSubmitAction = (data, callback) => {
  const url = "/technical-test";
  return (dispatch) => {
    dispatch(reduxPayload(TECHNICAL_TEST_SUBMIT_PENDING, true));
    apiClient({ method: "PUT", url: url, data })
      .then((res) => {
        dispatch(reduxPayload(TECHNICAL_TEST_SUBMIT_PENDING, false));
        toastAction.success("Test Successfully Submitted");

        if (callback) {
          callback();
        }
      })
      .catch((err) => {
        console.log(err);
        toastAction.error(err);
        dispatch(reduxPayload(TECHNICAL_TEST_SUBMIT_PENDING, false));
      });
  };
};
const personalityTestSubmitAction = (data) => {
  const url = "/personality-test";
  return (dispatch) => {
    dispatch(reduxPayload(PERSONALITY_TEST_SUBMIT_PENDING, true));
    apiClient({ method: "PUT", url: url, data })
      .then((res) => {
        dispatch(reduxPayload(PERSONALITY_TEST_SUBMIT_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(PERSONALITY_TEST_SUBMIT_PENDING, false));
      });
  };
};

export { technicalTestSubmitAction, personalityTestSubmitAction };
