// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf0NMg41xjCnJfQA8iimMlB0inS1i-2i8",
  authDomain: "traveladvisor-6ce0c.firebaseapp.com",
  projectId: "traveladvisor-6ce0c",
  storageBucket: "traveladvisor-6ce0c.appspot.com",
  messagingSenderId: "988224286566",
  appId: "1:988224286566:web:e5c0f7de6e348ac86b22a7",
  measurementId: "G-T6PK5DHG95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => {return auth.signInWithPopup(provider)}

export default firebase
