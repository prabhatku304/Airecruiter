import { combineReducers } from "redux";
import { UserTest } from "./userTest";
import { userReducer } from "./user";

const reducer = combineReducers({
  user: userReducer,
  test: UserTest,
});

export default reducer;
