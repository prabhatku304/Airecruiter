import { combineReducers } from "redux";
import { userReducer } from "./user";
import { companyJobReducer } from "./companyJob";
import { USER_LOGOUT } from "../action/user/type";
import { testReducer } from "./userTest";
import { candidateJobReducer } from "./candidateJob";

const appReducer = combineReducers({
  user: userReducer,
  test: testReducer,
  companyJob: companyJobReducer,
  candidateJob: candidateJobReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
