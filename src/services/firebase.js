import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9FUmeJS75WAaBw3OZMIlvhVfmGSOFyh4",
  authDomain: "estudo-oab-a3ac7.firebaseapp.com",
  projectId: "estudo-oab-a3ac7",
  storageBucket: "estudo-oab-a3ac7.firebasestorage.app",
  messagingSenderId: "961620008569",
  appId: "1:961620008569:web:2ccb37345ee69381c3bea8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
