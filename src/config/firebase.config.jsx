import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDlZ43ds7mdMO6C8beArTTU5WND9Hw3F3c",
  authDomain: "glasses-auth-e31f3.firebaseapp.com",
  projectId: "glasses-auth-e31f3",
  storageBucket: "glasses-auth-e31f3.appspot.com",
  messagingSenderId: "939276939451",
  appId: "1:939276939451:web:4305451e7f0747075ff99e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
