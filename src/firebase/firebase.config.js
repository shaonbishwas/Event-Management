// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzVAqThCZrp7zEOt37QSeMDDmR9Gi0MT8",
  authDomain: "event-management-a6e4f.firebaseapp.com",
  projectId: "event-management-a6e4f",
  storageBucket: "event-management-a6e4f.appspot.com",
  messagingSenderId: "488844333729",
  appId: "1:488844333729:web:3e8c2baffc94a7b4c1d6e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)