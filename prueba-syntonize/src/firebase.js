import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  // El deber ser es utilizar .env.local pero como debe correr en otro ordenador pongo la autenticación por aquí

  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
  
  apiKey: "AIzaSyABqvSHJiOQL3URZa2hOUqhXS5fyepmGuo",
  authDomain: "loginolivergallanti.firebaseapp.com",
  databaseURL:
    "https://loginolivergallanti-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "loginolivergallanti",
  storageBucket: "loginolivergallanti.appspot.com",
  messagingSenderId: "365998707572",
  appId: "1:365998707572:web:6c8ff78bf47eecf9091221",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
