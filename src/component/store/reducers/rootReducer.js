import authReducer from "./authReducer";
import activityReducer from "./activityReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
const rootReducer = combineReducers({
  auth: authReducer,
  activities: activityReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
