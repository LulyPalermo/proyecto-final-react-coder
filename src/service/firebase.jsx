// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3NNRTKJCs6VwiD6er23O-MSs4BHn1v-M",
  authDomain: "patio-proyecto-coder.firebaseapp.com",
  projectId: "patio-proyecto-coder",
  storageBucket: "patio-proyecto-coder.firebasestorage.app",
  messagingSenderId: "338399143180",
  appId: "1:338399143180:web:7225d45e72692ec2751529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 