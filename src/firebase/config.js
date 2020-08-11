import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAaaCOmsiIRPvc2ZfSyDgASphfxA8BWKdE",
    authDomain: "firegram-53f64.firebaseapp.com",
    databaseURL: "https://firegram-53f64.firebaseio.com",
    projectId: "firegram-53f64",
    storageBucket: "firegram-53f64.appspot.com",
    messagingSenderId: "199050548011",
    appId: "1:199050548011:web:a26fc247702dc7fd732b6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };