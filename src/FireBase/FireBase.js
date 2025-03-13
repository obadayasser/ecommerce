// Import the functions you need from the SDKs you need
import { FirebaseError, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZo3vjO51pU0W78IbL27KV_5JYYT8X7Rg",
  authDomain: "login-auth-a383a.firebaseapp.com",
  projectId: "login-auth-a383a",
  storageBucket: "login-auth-a383a.firebasestorage.app",
  messagingSenderId: "132374537482",
  appId: "1:132374537482:web:162fb12cb15d4ad719c6f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore(app)
export default app;