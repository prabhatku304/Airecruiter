import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_LOGIN_PENDING,
  USER_REGISTER_PENDING,
  USER_ERROR,
  USER_PROFILE,
  USER_PROFILE_GET_PENDING,
} from "../action/user/type";
import { RESUME_UPLOAD_PENDING } from "../action/resume/type";

const DEFAULT_STATE = {
  user: null,
  userProfile: null,
  isAuthenticated: null,
  isProfileGetPending: null,
  isPendingRegister: false,
  isPendingLogin: false,
  isResumeUploadPending: false,
  error: null,
};

export const userReducer = (
  state = DEFAULT_STATE,
  { type, payload, error }
) => {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
      };
    case USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: null,
      };
    case USER_PROFILE_GET_PENDING:
      return {
        ...state,
        isProfileGetPending: payload,
      };
    case USER_LOGIN_PENDING:
      return {
        ...state,
        isPendingLogin: payload,
      };
    case USER_REGISTER_PENDING:
      return {
        ...state,
        isPendingRegister: payload,
      };
    case RESUME_UPLOAD_PENDING:
      return {
        ...state,
        isResumeUploadPending: payload,
      };
    case USER_ERROR:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};
