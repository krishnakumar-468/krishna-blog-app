// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2m_TaEs2QjqfyTx7fXatbg0VvS4vzZRY",
  authDomain: "krishna-blog-app.firebaseapp.com",
  projectId: "krishna-blog-app",
  storageBucket: "krishna-blog-app.appspot.com",
  messagingSenderId: "347394156405",
  appId: "1:347394156405:web:f46fe037f48b1d1baad53c",
  measurementId: "G-LNHXBVCMWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();