// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAtvVkusHyem1Nj1Cunv8kQLswOYCXA8Q8",
    authDomain: "netflix-redux-25d64.firebaseapp.com",
    projectId: "netflix-redux-25d64",
    storageBucket: "netflix-redux-25d64.appspot.com",
    messagingSenderId: "801180449403",
    appId: "1:801180449403:web:915e3f028968b4a8cb80de",
    measurementId: "G-4NFSRB8QSR"
  };
  
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider,db};