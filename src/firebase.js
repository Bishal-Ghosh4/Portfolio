// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLKzlNZlL3NB3tu90Bqg8s29pR2ExQENU",
  authDomain: "bishal-portofolio.firebaseapp.com",
  projectId: "bishal-portofolio",
  storageBucket: "bishal-portofolio.appspot.com",
  messagingSenderId: "616456670272",
  appId: "1:616456670272:web:077eb594a46460314323a5",
  measurementId: "G-6SBWRHY25W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
