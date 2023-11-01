import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCf7OelRl6cAFEjx32RQM3eesBafpUiFXc",
    authDomain: "clone-4ec58.firebaseapp.com",
    projectId: "clone-4ec58",
    storageBucket: "clone-4ec58.appspot.com",
    messagingSenderId: "872178396144",
    appId: "1:872178396144:web:510cc15bbbe40616e78b35",
    measurementId: "G-7DTQ2HGT70"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp); // having database

const auth = getAuth(firebaseApp); // done authrisation

export { db, auth };
 // now these can be accessible outside this fire also