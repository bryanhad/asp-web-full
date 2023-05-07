import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "asp-web-full.firebaseapp.com",
  projectId: "asp-web-full",
  storageBucket: "asp-web-full.appspot.com",
  messagingSenderId: "375392732954",
  appId: "1:375392732954:web:860fa9e9a7f3dcd52d8ea3",
  measurementId: "G-GB0P1FDFNP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export const storage = getStorage(app);
