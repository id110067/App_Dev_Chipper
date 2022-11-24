// firebase config key setup

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyC-y4idXLFEfHTGmW8hyNQYPAFGc68uqmE",
    authDomain: "appdev-d1d73.firebaseapp.com",
    projectId: "appdev-d1d73",
    storageBucket: "appdev-d1d73.appspot.com",
    messagingSenderId: "320699309420",
    appId: "1:320699309420:web:3198f57bec9d01b430e749",
    measurementId: "G-KTD42G0BW1"
};


if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC-y4idXLFEfHTGmW8hyNQYPAFGc68uqmE",
//   authDomain: "appdev-d1d73.firebaseapp.com",
//   projectId: "appdev-d1d73",
//   storageBucket: "appdev-d1d73.appspot.com",
//   messagingSenderId: "320699309420",
//   appId: "1:320699309420:web:3198f57bec9d01b430e749",
//   measurementId: "G-KTD42G0BW1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);