// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIi0sfn3JvhTdHTGVxTS-yrUK1omHXylI",
    authDomain: "clone-c271f.firebaseapp.com",
    projectId: "clone-c271f",
    storageBucket: "clone-c271f.appspot.com",
    messagingSenderId: "925563776307",
    appId: "1:925563776307:web:900e26b097286187012246",
    measurementId: "G-DP1Y0G3HPV"
  };
// const firebaseApp=firebase.initializeApp(firebaseConfig);
// const db=firebaseApp.firestore();
// const auth=firebase.auth();
// export {db, auth};
/////////////////////////////////////////////////////////////
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
  
