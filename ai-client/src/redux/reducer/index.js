import { combineReducers } from "redux";
import { UserTest } from "./userTest";
import { userReducer } from "./user";
import { companyJobReducer } from "./companyJob";

const reducer = combineReducers({
  user: userReducer,
  test: UserTest,
  companyJob: companyJobReducer,
});

export default reducer;
