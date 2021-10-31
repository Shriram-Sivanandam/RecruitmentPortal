import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCjLjOs1llvTVoAYy-6ahQcvcT-PPj58A0",
  authDomain: "stcrecruitmentportal.firebaseapp.com",
  projectId: "stcrecruitmentportal",
  storageBucket: "stcrecruitmentportal.appspot.com",
  messagingSenderId: "623361095597",
  appId: "1:623361095597:web:3baf37d46d40b6c1bad324",
  measurementId: "G-SCY49WP6KJ",
});

var db = app.firestore();
export const auth = app.auth();

export { db };

export default app;

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
