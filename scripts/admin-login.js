import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js"; 

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

const auth = getAuth();



// CHECK USER

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    window.location.href = "panel.html";
    // ...
  } else {
    // User is signed out
    // ...
  }
});


// LOGIN FUNCTION

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    const useremail = document.getElementById("email").value;
    const userpassword = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, useremail, userpassword).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.href="panel.html";  
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error : " + errorMessage);
    });
});