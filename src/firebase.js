// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "buyco-7ded1.firebaseapp.com",
  projectId: "buyco-7ded1",
  storageBucket: "buyco-7ded1.appspot.com",
  messagingSenderId: "667175097852",
  appId: "1:667175097852:web:94f15f916f0e0075e10e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
