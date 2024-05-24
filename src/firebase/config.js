import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Configuracion de firestore
const firebaseConfig = {
  apiKey: "AIzaSyCiMlPoEqhGHcHb2llItNY4goFCNKtXqNM",
  authDomain: "skyscan-d7ce5.firebaseapp.com",
  projectId: "skyscan-d7ce5",
  storageBucket: "skyscan-d7ce5.appspot.com",
  messagingSenderId: "679523887443",
  appId: "1:679523887443:web:0abca4e0024b8dc57b59a6",
  measurementId: "G-VPJL6F11YB"
};

//Inicializa firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);