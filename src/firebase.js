// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDe7rdL1aExGIUSa3L0cqesPn9jNGY2oZo",

  authDomain: "mock-imdb.firebaseapp.com",

  projectId: "mock-imdb",

  storageBucket: "mock-imdb.appspot.com",

  messagingSenderId: "734766379340",

  appId: "1:734766379340:web:f18e2085e9516588501fe9",

  measurementId: "G-2G2GMLX75R",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
