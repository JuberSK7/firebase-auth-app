// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYedZOS3qNnKP0cuZBFmEiluMOHGNFeno",
  authDomain: "react-email-auth-fe1b0.firebaseapp.com",
  projectId: "react-email-auth-fe1b0",
  storageBucket: "react-email-auth-fe1b0.appspot.com",
  messagingSenderId: "632013089906",
  appId: "1:632013089906:web:95c70ef421c522029326eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
