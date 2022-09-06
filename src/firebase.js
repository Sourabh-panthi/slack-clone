import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXttVjK2w4U0S1tu8k6rVHib4ezhlDJ8U",
  authDomain: "panthi-slack.firebaseapp.com",
  projectId: "panthi-slack",
  storageBucket: "panthi-slack.appspot.com",
  messagingSenderId: "25152271211",
  appId: "1:25152271211:web:235e601f37ebf7d0d2922e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
