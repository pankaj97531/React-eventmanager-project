import firebase from '@firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDhUA10Ns2v1KXdelQCKRt9asnlD-W2Wx4",
    authDomain: "reevents-cbe6a.firebaseapp.com",
    databaseURL: "https://reevents-cbe6a.firebaseio.com",
    projectId: "reevents-cbe6a",
    storageBucket: "reevents-cbe6a.appspot.com",
    messagingSenderId: "35987516607",
    appId: "1:35987516607:web:c4baccd8c863c77257ea0a"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

export default firebase;  