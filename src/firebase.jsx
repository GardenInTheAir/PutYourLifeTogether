import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhG0akPhc2HePuacLo4LsupCmzZbzdC9w",
  authDomain: "putyourlifetogether-1004.firebaseapp.com",
  databaseURL: "https://putyourlifetogether-1004-default-rtdb.firebaseio.com",
  projectId: "putyourlifetogether-1004",
  storageBucket: "putyourlifetogether-1004.firebasestorage.app",
  messagingSenderId: "1058573522917",
  appId: "1:1058573522917:web:ce76e906af9def044a410c",
  measurementId: "G-JMSM2FWXYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
