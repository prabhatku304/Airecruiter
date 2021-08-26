import React from "react";
import { createUserApiRoute } from "../../apiRoute/user";
import { apiClient } from "../../../service/apiClient";
import { reduxPayload } from "../base";
import {
  USER_REGISTER,
  USER_REGISTER_PENDING,
  USER_LOGIN,
  USER_LOGIN_PENDING,
} from "./type";

const userRegisterAction = (data) => {
  const url = createUserApiRoute();
  return (dispatch) => {
    dispatch(reduxPayload(USER_REGISTER_PENDING, true));
    apiClient({ method: "POST", url: url, data })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        dispatch(reduxPayload(USER_LOGIN, res.data));
        dispatch(reduxPayload(USER_REGISTER_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(USER_REGISTER_PENDING, false));
      });
  };
};

const userLoginAction = (data) => {
  const url = createUserApiRoute();
  return (dispatch) => {
    dispatch(reduxPayload(USER_LOGIN_PENDING, true));
    apiClient({ method: "POST", url: url, data })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        dispatch(reduxPayload(USER_LOGIN, res.data));
        dispatch(reduxPayload(USER_LOGIN_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(USER_LOGIN_PENDING, false));
      });
  };
};

const userLogoutAction = async () => {
  await localStorage.clear();
};
export { userLoginAction, userRegisterAction, userLogoutAction };
