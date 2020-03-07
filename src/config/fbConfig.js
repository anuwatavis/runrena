import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD5KsmYR3dTKVkKs4j90mFURSYJmH7Y3UM",
  authDomain: "runrena-b3aa5.firebaseapp.com",
  databaseURL: "https://runrena-b3aa5.firebaseio.com",
  projectId: "runrena-b3aa5",
  storageBucket: "runrena-b3aa5.appspot.com",
  messagingSenderId: "934836139007",
  appId: "1:934836139007:web:437ccaa11f9a0097ffedca",
  measurementId: "G-LZYG8XJ7F2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
