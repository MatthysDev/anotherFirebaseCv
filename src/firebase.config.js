import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";


export const firebaseConfig = {
  apiKey: "AIzaSyCgAXfyS3u5E1gBeOyD9ontOuq1M2KCMnk",
  authDomain: "reactportfoliocorentyn.firebaseapp.com",
  projectId: "reactportfoliocorentyn",
  storageBucket: "reactportfoliocorentyn.appspot.com",
  messagingSenderId: "188297901392",
  appId: "1:188297901392:web:f20f760d30cbd8c2036855",
  measurementId: "G-QRR0Y6WVKY",
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

