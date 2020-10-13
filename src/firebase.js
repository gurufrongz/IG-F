import firebase from 'firebase';

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyAMgNs1JaO9cg-oKwcplAIzANB-Pb2SawQ",
  authDomain: "instagram-clone-react-f8531.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-f8531.firebaseio.com",
  projectId: "instagram-clone-react-f8531",
  storageBucket: "instagram-clone-react-f8531.appspot.com",
  messagingSenderId: "1082632589543",
  appId: "1:1082632589543:web:c72e52bc8aa7ed94109242",
  measurementId: "G-ELH12K1BVK"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export  {db, auth, storage};

//export default 