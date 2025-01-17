import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiYTbmy6PLXQfAQEusTOLcBi4UbX8gUFs",
  authDomain: "clozzet-6514a.firebaseapp.com",
  projectId: "clozzet-6514a",
  storageBucket: "clozzet-6514a.firebasestorage.app",
  messagingSenderId: "419906234836",
  appId: "1:419906234836:web:1a34591d8a0a3b92628e41"
};

const app=initializeApp(firebaseConfig)
export const auth=getAuth(app)
export const db = getFirestore(app);
