import React from "react";
import {
  createUserApiRoute,
  loginUserApiRoute,
  getUserApiRoute,
  getUserProfileApiRoute,
} from "../../apiRoute/user";
import { apiClient } from "../../../service/apiClient";
import { reduxPayload } from "../base";
import {
  USER_REGISTER,
  USER_REGISTER_PENDING,
  USER_LOGIN,
  USER_LOGIN_PENDING,
  USER_PROFILE_GET_PENDING,
  USER_PROFILE,
  USER_PROFILE_UPDATE_PENDING,
  USER_GET_PENDING,
  USER_LOGOUT,
} from "./type";

const userRegisterAction = (data) => {
  const url = createUserApiRoute();
  console.log(url);
  return (dispatch) => {
    dispatch(reduxPayload(USER_REGISTER_PENDING, true));
    apiClient({ method: "POST", url: url, data })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        dispatch(reduxPayload(USER_LOGIN, res.data));
        dispatch(reduxPayload(USER_REGISTER_PENDING, false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(reduxPayload(USER_REGISTER_PENDING, false));
      });
  };
};

const userLoginAction = (data) => {
  const url = loginUserApiRoute();
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
const userGetAction = () => {
  const url = getUserApiRoute();
  return (dispatch) => {
    dispatch(reduxPayload(USER_GET_PENDING, true));
    apiClient({ method: "GET", url: url })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        dispatch(reduxPayload(USER_LOGIN, res.data));
        dispatch(reduxPayload(USER_GET_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(USER_GET_PENDING, false));
      });
  };
};

const userProfileGetAction = () => {
  const url = getUserProfileApiRoute();
  return (dispatch) => {
    dispatch(reduxPayload(USER_PROFILE_GET_PENDING, true));
    apiClient({ method: "GET", url: url })
      .then((res) => {
        dispatch(reduxPayload(USER_PROFILE, res.data));
        dispatch(reduxPayload(USER_PROFILE_GET_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(USER_PROFILE_GET_PENDING, false));
      });
  };
};
const userProfileUpdateAction = (data, callback) => {
  const url = getUserProfileApiRoute();
  return (dispatch) => {
    dispatch(reduxPayload(USER_PROFILE_UPDATE_PENDING, true));
    apiClient({ method: "PUT", url: url, data })
      .then((res) => {
        dispatch(reduxPayload(USER_PROFILE_UPDATE_PENDING, false));
        if (callback) {
          callback();
        }
      })
      .catch((err) => {
        dispatch(reduxPayload(USER_PROFILE_UPDATE_PENDING, false));
      });
  };
};

const userLogoutAction = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(reduxPayload(USER_LOGOUT));
  };
};
export {
  userLoginAction,
  userRegisterAction,
  userLogoutAction,
  userGetAction,
  userProfileGetAction,
  userProfileUpdateAction,
};
