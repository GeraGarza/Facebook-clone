// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvM4OkQK418HR2RI59CIsT5qZX4dE6Axs",
  authDomain: "facebook-clone-58f47.firebaseapp.com",
  databaseURL: "https://facebook-clone-58f47.firebaseio.com",
  projectId: "facebook-clone-58f47",
  storageBucket: "facebook-clone-58f47.appspot.com",
  messagingSenderId: "1071410189011",
  appId: "1:1071410189011:web:eb0866aac972dd9262fa26",
  measurementId: "G-5XRL0GQF6F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
