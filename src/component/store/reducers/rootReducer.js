import authReducer from "./authReducer";
import activityReducer from "./activityReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import runrenaReducer from "./runrenaRuducer";
import activityPostReducer from "../reducers/activityPostReducer";
import activityStatReducer from "../reducers/activityStatReducer";
import userDataReducer from "../reducers/userActionReducer";
import activityByDateReducer from "../reducers/activityByDateReducer";
const rootReducer = combineReducers({
  auth: authReducer, // state from auth reducer
  activities: activityReducer, // activity state
  firestore: firestoreReducer, // state from firestroe
  firebase: firebaseReducer, // state from firebase data
  friend: runrenaReducer,
  activityPost: activityPostReducer,
  activitiesStat: activityStatReducer,
  userData: userDataReducer,
  activityByDate: activityByDateReducer,
});

export default rootReducer;
