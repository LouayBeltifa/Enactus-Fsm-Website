// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
import {doc, setDoc, collection, addDoc, getFirestore } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpT7hfDj308TYJvDAANK5VvERcX9d0J5U",
  authDomain: "enactusfsm-52821.firebaseapp.com",
  projectId: "enactusfsm-52821",
  storageBucket: "enactusfsm-52821.appspot.com",
  messagingSenderId: "573574010053",
  appId: "1:573574010053:web:e64ccf21517b6d9bf64cac",
  measurementId: "G-1SC1SXN4YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();


const btnSender = document.getElementById("sender");

btnSender.addEventListener('click', (e) =>{
    e.preventDefault();

    const userFullName = document.getElementById("fullname").value;
    const userEmail = document.getElementById("email").value;
    const userMessage = document.querySelector(".message").value;


    const docRef = addDoc(collection(db, "contactUs"), {
        fullname : userFullName,
        email : userEmail,
        message : userMessage
      });

      document.querySelector('form').classList.add('remove');
      document.getElementById('success').classList.add('show');
});