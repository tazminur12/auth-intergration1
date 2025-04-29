// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ✅ Add GoogleAuthProvider

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcgLW1WiR-Yskw8XCDcRfSV4jOpUIs9jE",
  authDomain: "auth-intergration1.firebaseapp.com",
  projectId: "auth-intergration1",
  storageBucket: "auth-intergration1.appspot.com",
  messagingSenderId: "433734238994",
  appId: "1:433734238994:web:6a01d479501763f0e429cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); // ✅ Export this
