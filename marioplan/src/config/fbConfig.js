import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCgCxUufFLPF6livPnSSsV8pGPAgoCsu3s",
  authDomain: "marioplandc.firebaseapp.com",
  databaseURL: "https://marioplandc.firebaseio.com",
  projectId: "marioplandc",
  storageBucket: "marioplandc.appspot.com",
  messagingSenderId: "193861293441",
  appId: "1:193861293441:web:334fc14ce40e8fdf6e4480",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
