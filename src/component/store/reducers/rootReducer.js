import authReducer from "./authReducer";
import activityReducer from "./activityReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  activities: activityReducer
});

export default rootReducer;
