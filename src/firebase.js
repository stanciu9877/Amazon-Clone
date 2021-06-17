import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCouEE08ViAe6rVyD2XHiAOpjX2ETqzw-o",
  authDomain: "clone-8bc8e.firebaseapp.com",
  projectId: "clone-8bc8e",
  storageBucket: "clone-8bc8e.appspot.com",
  messagingSenderId: "45032406764",
  appId: "1:45032406764:web:34bb2bd09f8ff8ee8b2fc9",
  measurementId: "G-FFY3NH143S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
