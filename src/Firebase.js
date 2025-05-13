import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiAmHreFajxKolL4adZ_94AV7rpPU4vIw",
  authDomain: "denta-vesre.firebaseapp.com",
  projectId: "denta-vesre",
  storageBucket: "denta-vesre.appspot.com",  
  messagingSenderId: "842181672106",
  appId: "1:842181672106:web:5fc94ea5edb64f31eb64d3",
  measurementId: "G-81K68BY74D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };