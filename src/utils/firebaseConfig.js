// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgzo01gHyUN4fnK21hzDoS44MW7fhAOGg",
  authDomain: "mock-ebeac.firebaseapp.com",
  projectId: "mock-ebeac",
  storageBucket: "mock-ebeac.firebasestorage.app",
  messagingSenderId: "625101442179",
  appId: "1:625101442179:web:6fa87e52dbd511dd031fb6",
  measurementId: "G-C7N5G64Q1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);