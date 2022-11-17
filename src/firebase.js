
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDeeNM8Q-Khy9WOntBBZ8cRc-nSr6tzwL4",
    authDomain: "disneyclone-68106.firebaseapp.com",
    projectId: "disneyclone-68106",
    storageBucket: "disneyclone-68106.appspot.com",
    messagingSenderId: "278790327168",
    appId: "1:278790327168:web:0b61d0c5cad2c6d3bf4f65",
    measurementId: "G-2STH511GNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
