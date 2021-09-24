import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
import {getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

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
const db = getFirestore();


// CHECK USER   

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    window.location.href = "admin-login.html";
    // ...
  }
});



// SIGN OUT FUNCTION 
const signoutbtn = document.getElementById("signout");

signoutbtn.addEventListener('click', (e) => {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = "admin-login.html";
      }).catch((error) => {
        // An error happened.
        alert("Error");
      });
});


// Read Data Messages and print it in table Messaget
const messagetable = document.querySelector('.messagetable');

const renderuser = datas => {
    const tr = ` <tr>
                    <td>${datas.data().fullname}</td>
                    <td>${datas.data().email}</td>
                    <td>${datas.data().message}</td>
                </tr>
    `;
    messagetable.insertAdjacentHTML('beforeend', tr);
}

const querySnapshot = await getDocs(collection(db, "contactUs"));
querySnapshot.forEach((doc) => {
    renderuser(doc);
});



// READ DATA JOIN US  AND PRINT IT IN TABLE 

const joinustable = document.querySelector('.recruttable');

const rendercandidat = dataio => {
    const trr = ` <tr>
                    <td>${dataio.data().FirstName}</td>
                    <td>${dataio.data().LastName}</td>
                    <td>${dataio.data().Email}</td>
                    <td>${dataio.data().PhoneNumber}</td>
                    <td>${dataio.data().SchoolLevel}</td>
                    <td>${dataio.data().Sector}</td>
                </tr>
    `;
    joinustable.insertAdjacentHTML('beforeend', trr);   
} 



const querySnapshotq = await getDocs(collection(db, "JoinUs"));
querySnapshotq.forEach((docm) => {
    rendercandidat(docm);
});