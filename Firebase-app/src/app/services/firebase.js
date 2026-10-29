// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC80Vd8xVB3W2OLiaW4VkPC_LaYBn-wT7I",
  authDomain: "project-firebae.firebaseapp.com",
  projectId: "project-firebae",
  storageBucket: "project-firebae.firebasestorage.app",
  messagingSenderId: "894403682474",
  appId: "1:894403682474:web:3f6ec341bdbfa53e1cb0d3",
  measurementId: "G-CTHEH4GVFW"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);