import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_jCoplbBCn5StUXa-1MddTH4MZ6PZ3Ug",
  authDomain: "naira-estates.firebaseapp.com",
  projectId: "naira-estates",
  storageBucket: "naira-estates.firebasestorage.app",
  messagingSenderId: "1019342178212",
  appId: "1:1019342178212:web:2f5bb0849499f4b713e331",
};

const app = initializeApp(firebaseConfig);

// This is our database connection — we'll import it in the forms
export const db = getFirestore(app);