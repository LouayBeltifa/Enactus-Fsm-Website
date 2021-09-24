// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
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
const db = getFirestore();

const sendbtn = document.querySelector('form');

sendbtn.addEventListener('submit', (e)=>{
    e.preventDefault();

    const userfn = document.getElementById('firstname').value;
    const userln = document.getElementById('lastname').value;
    const useremail = document.getElementById('email').value;
    const userphone = document.getElementById('phonenumber').value;
    const select = document.getElementById('schoollevel');
    const userschoollevel = select.options[select.selectedIndex].value;
    const usersector = document.getElementById('sector').value;

    const docRef = addDoc(collection(db, "JoinUs"), {
        FirstName : userfn,
        LastName : userln,
        Email : useremail,
        PhoneNumber : userphone,
        SchoolLevel : userschoollevel,
        Sector : usersector
      });
      document.querySelector('form').classList.add('remove');
      document.getElementById('success').classList.add('show');
});