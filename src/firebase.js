// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqsJPRCeBINwlEPTNLPBEjA091wHoOtRM",
  authDomain: "booknow----react.firebaseapp.com",
  projectId: "booknow----react",
  storageBucket: "booknow----react.appspot.com",
  messagingSenderId: "617434258682",
  appId: "1:617434258682:web:745704cd72331b0a867d43",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
