import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDa6kCF8IbShM8_3idDpG9b5mc3Kb75hyQ",
    authDomain: "slack-clone2-5fffd.firebaseapp.com",
    projectId: "slack-clone2-5fffd",
    storageBucket: "slack-clone2-5fffd.appspot.com",
    messagingSenderId: "565082779298",
    appId: "1:565082779298:web:594004a538b282341a31fb"
  };

//To initilize the firebase App.
const firebaseApp = firebase.initializeApp(firebaseConfig);

//To get Assess to that firebase App.
const db = firebaseApp.firestore();

//To use the data we need to export it
export default db;