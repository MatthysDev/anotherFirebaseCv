import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDDgBvnsrDkSUex9bRbYES_Zkh-ZRNm-s",

  authDomain: "matthyscv.firebaseapp.com",

  projectId: "matthyscv",

  storageBucket: "matthyscv.appspot.com",

  messagingSenderId: "563031124487",

  appId: "1:563031124487:web:134ea85ddfe3b673dd58a2",

  measurementId: "G-1KEHSGHG97",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
