import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyARlbf83ViiI8FF9pa1vK0zvmizns9QF0k",
    authDomain: "slack-clone2-again.firebaseapp.com",
    projectId: "slack-clone2-again",
    storageBucket: "slack-clone2-again.appspot.com",
    messagingSenderId: "820528362049",
    appId: "1:820528362049:web:ff376340fbe7d3a4ec0cc0"
  };

//To initilize the firebase App.
const firebaseApp = firebase.initializeApp(firebaseConfig);

//To get Assess to that firebase App.
const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
//To use the data we need to export it
export default db;