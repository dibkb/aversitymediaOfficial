import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
export const firebaseConfig = {
  authDomain: "aversitymediaofficial.firebaseapp.com",
  projectId: "aversitymediaofficial",
  storageBucket: "aversitymediaofficial.appspot.com",
  apiKey: process.env.FIREBASE_AUTH_KEY,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const COLLECTION = "CONTACT INFO";
