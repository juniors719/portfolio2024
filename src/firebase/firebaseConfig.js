// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9whzNlROQoTLWHSJveN5u2fAp6FgKoGs",
    authDomain: "pingas-play.firebaseapp.com",
    projectId: "pingas-play",
    storageBucket: "pingas-play.appspot.com",
    messagingSenderId: "141790180336",
    appId: "1:141790180336:web:97a294a69887d7770f2335",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
