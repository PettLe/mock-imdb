// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

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

const provider = new GoogleAuthProvider();

const analytics = getAnalytics(app);

const auth = getAuth();

function googleSignIn() {
  const provider = new GoogleAuthProvider();
  // select account
  provider.setCustomParameters({
    prompt: "select_account",
  });
  return signInWithPopup(auth, provider);
}

let userName = "";
const signIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      userName = user.displayName;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

const userSignOut = function () {
  signOut(auth)
    .then(() => {
      userName = "Stranger";
      console.log("Nyt pitäis olla ulkona");
    })
    .catch((error) => {
      console.log("Uloskirjautuminen ei toimi");
    });
};

export { signIn, userName, googleSignIn, userSignOut };
