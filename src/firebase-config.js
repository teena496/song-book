// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCirAkh82JLJiB_pS8hh-9rkRpgLPA3U3Q",
  authDomain: "mysongbook-6a650.firebaseapp.com",
  projectId: "mysongbook-6a650",
  storageBucket: "mysongbook-6a650.appspot.com",
  messagingSenderId: "703478495922",
  appId: "1:703478495922:web:0d12ce6f6dcd17c376e7ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
