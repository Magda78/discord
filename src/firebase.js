import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBElH0B5tE2tLla4ks92TWbYOnKSi6mGjU",
  authDomain: "discord-clone-7747f.firebaseapp.com",
  databaseURL: "https://discord-clone-7747f.firebaseio.com",
  projectId: "discord-clone-7747f",
  storageBucket: "discord-clone-7747f.appspot.com",
  messagingSenderId: "681098966521",
  appId: "1:681098966521:web:ab9fcffb00616297743928",
  measurementId: "G-6FLBQD6QN4"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;