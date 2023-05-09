// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi7k5lQlf__MxopjDcVnR5yEgbrjgPITY",
  authDomain: "react-admin-dashboard-5bd7c.firebaseapp.com",
  projectId: "react-admin-dashboard-5bd7c",
  storageBucket: "react-admin-dashboard-5bd7c.appspot.com",
  messagingSenderId: "511234567327",
  appId: "1:511234567327:web:ca75253356003d5aea86aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth();
export const storage = getStorage(app)