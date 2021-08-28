import { combineReducers } from "redux";
import { UserTest } from "./userTest";
import { userReducer } from "./user";
import { companyJobReducer } from "./companyJob";
import { USER_LOGOUT } from "../action/user/type";

const appReducer = combineReducers({
  user: userReducer,
  test: UserTest,
  companyJob: companyJobReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
