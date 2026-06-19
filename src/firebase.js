import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config (correct)
const firebaseConfig = {
  apiKey: "AIzaSyAPWBhALHhlGe8i51EJiYwNJQAIwsCAaeA",
  authDomain: "discord-sever-maker-v2.firebaseapp.com",
  projectId: "discord-sever-maker-v2",
  storageBucket: "discord-sever-maker-v2.firebasestorage.app",
  messagingSenderId: "1032788586752",
  appId: "1:1032788586752:web:ae138d9ba7de02240483e5",
  measurementId: "G-QD8PXN9MCE"
};

// init app
const app = initializeApp(firebaseConfig);

// services
export const auth = getAuth(app);
export const db = getFirestore(app);