// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN3qa6qoBFXJcUlA34c3Nw2-221PxwduQ",
  authDomain: "fir-contact-app-2ce73.firebaseapp.com",
  databaseURL: "https://fir-contact-app-2ce73-default-rtdb.firebaseio.com",
  projectId: "fir-contact-app-2ce73",
  storageBucket: "fir-contact-app-2ce73.appspot.com",
  messagingSenderId: "831002245249",
  appId: "1:831002245249:web:85e11e2910321455a2b580",
  measurementId: "G-G7GRLCJ4JV"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;


