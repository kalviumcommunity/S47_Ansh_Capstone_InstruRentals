// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c5efa.firebaseapp.com",
  projectId: "mern-auth-c5efa",
  storageBucket: "mern-auth-c5efa.appspot.com",
  messagingSenderId: "686250186015",
  appId: "1:686250186015:web:c88ccc80ea1bdd312b0c2a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);