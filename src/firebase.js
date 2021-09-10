// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase  from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBY8e5ndRC1fIOA6FDcQMPa80zIdJXM3Gc",
    authDomain: "whatsapp-clone-aebfb.firebaseapp.com",
    projectId: "whatsapp-clone-aebfb",
    storageBucket: "whatsapp-clone-aebfb.appspot.com",
    messagingSenderId: "108557410849",
    appId: "1:108557410849:web:78140a3a8a3c114af5f960",
    measurementId: "G-MYBXTK8F6D"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;