import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmvd09MrfqDjDCE7EMXEXLNujVsRQValQ",
  authDomain: "todo-list-e6b3c.firebaseapp.com",
  projectId: "todo-list-e6b3c",
  storageBucket: "todo-list-e6b3c.appspot.com",
  messagingSenderId: "1061715478796",
  appId: "1:1061715478796:web:7ffeb08d582101020ca129",
  measurementId: "G-523GQ2TF43"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
