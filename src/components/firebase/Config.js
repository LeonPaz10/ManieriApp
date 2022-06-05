// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5jAGOdEFiayKckEcNGvA3HeVln06HCsQ",
  authDomain: "manieriapp-f8522.firebaseapp.com",
  projectId: "manieriapp-f8522",
  storageBucket: "manieriapp-f8522.appspot.com",
  messagingSenderId: "534531196455",
  appId: "1:534531196455:web:3abc31681bf323500db002"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;