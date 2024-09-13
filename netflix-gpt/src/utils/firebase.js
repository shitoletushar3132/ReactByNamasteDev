// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZu4-exDW9x-kcApBPdIC_D5ZeARsoq8M",
  authDomain: "netflixgpt-35c78.firebaseapp.com",
  projectId: "netflixgpt-35c78",
  storageBucket: "netflixgpt-35c78.appspot.com",
  messagingSenderId: "825264849895",
  appId: "1:825264849895:web:a4db734f3f81f256243342",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
