import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "./firebase";

// SIGN UP
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// LOGIN
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// LOGOUT
export const logout = () => {
  return signOut(auth);
};

// LISTEN TO USER LOGIN STATE
export const listenAuth = (callback) => {
  return onAuthStateChanged(auth, callback);
};