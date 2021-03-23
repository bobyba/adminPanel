import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyADCFRE8ougF-8a_Ry1TFNUw29Yon8dC_s",
  authDomain: "alaborsoft-b7fa0.firebaseapp.com",
  databaseURL: "https://alaborsoft-b7fa0.firebaseio.com",
  projectId: "alaborsoft-b7fa0",
  storageBucket: "alaborsoft-b7fa0.appspot.com",
  messagingSenderId: "1001799571657",
  appId: "1:1001799571657:web:0023976fd587ae11cbd518",
  measurementId: "G-V1XB3KTDXZ",
});

const db = firebase.firestore();
const funcs = firebase.functions();
const an = firebase.analytics();
const st = firebase.storage();

export { db, funcs, st };
export default firebase;
