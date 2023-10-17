// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJfVvLvByThb_ZjvpGJTaCl-SqyxQ8afA",
  authDomain: "coffee-shop-4ef36.firebaseapp.com",
  projectId: "coffee-shop-4ef36",
  storageBucket: "coffee-shop-4ef36.appspot.com",
  messagingSenderId: "856860134634",
  appId: "1:856860134634:web:d9ae245bd53bd9c9715b93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;