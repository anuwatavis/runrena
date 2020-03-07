import authReducer from "./authReducer";
import activityReducer from "./activityReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
const rootReducer = combineReducers({
  auth: authReducer,
  activities: activityReducer,
  firestore: firestoreReducer
});

export default rootReducer;
