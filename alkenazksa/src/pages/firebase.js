// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLg1YH6xVOQoEUDFhwo35nmQlcczTdWLU",
  authDomain: "alkenazsa.firebaseapp.com",
  projectId: "alkenazsa",
  storageBucket: "alkenazsa.appspot.com",
  messagingSenderId: "871963843357",
  appId: "1:871963843357:web:dd2cfa6bf25f5f8a10dff4",
  measurementId: "G-ZE03CR4X07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);