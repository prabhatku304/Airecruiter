import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_LOGIN_PENDING,
  USER_REGISTER_PENDING,
  USER_ERROR,
} from "../action/user/type";

const DEFAULT_STATE = {
  user: null,
  isAuthenticated: null,
  isPendingRegister: false,
  isPendingLogin: false,
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
    case USER_LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: null,
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
    case USER_ERROR:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};
