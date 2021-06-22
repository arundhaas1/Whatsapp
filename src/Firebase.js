// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDPtx827Xl6TbpkaYZ-a6xuyZoaOrSSX6w",
    authDomain: "whatsapp-2b251.firebaseapp.com",
    projectId: "whatsapp-2b251",
    storageBucket: "whatsapp-2b251.appspot.com",
    messagingSenderId: "815713412128",
    appId: "1:815713412128:web:55aba9fc9f62c43e464845",
    measurementId: "G-JV3EN44XH3"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig )
  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export default db;
  export {provider,storage,auth};