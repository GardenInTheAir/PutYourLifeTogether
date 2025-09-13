import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "putyourlifetogether-1004",
    storageBucket: "",
    messagingSenderId: "1058573522917",
    appId: ""
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
