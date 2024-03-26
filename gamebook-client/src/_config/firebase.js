import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDV00hmyBK4eAlGdkP5euaUjyUEaRuhc9w",
  authDomain: "notevault-flutter-app.firebaseapp.com",
  projectId: "notevault-flutter-app",
  storageBucket: "notevault-flutter-app.appspot.com",
  messagingSenderId: "554254545418",
  appId: "1:554254545418:web:f7239a48e1b71d5fcc25f3",
  measurementId: "G-PJTJDW99LT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
