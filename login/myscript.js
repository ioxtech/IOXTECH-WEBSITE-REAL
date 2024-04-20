 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiJf_JEBIrgH1_oUnSf9YvADTarvApbis",
  authDomain: "auth2-63872.firebaseapp.com",
  databaseURL: "https://auth2-63872-default-rtdb.firebaseio.com",
  projectId: "auth2-63872",
  storageBucket: "auth2-63872.appspot.com",
  messagingSenderId: "184257599844",
  appId: "1:184257599844:web:f7b708d8ec11434e538271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const signinButton = document.getElementById("signin-button");
const signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", (e) => {
  let username = document.getElementById("username").value;
  let nohp = document.getElementById("nohp").value;
  let emailSignup = document.getElementById("email_signup").value;
  let passwordSignup = document.getElementById("psw_signup").value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        username: username,
        nohp: nohp,
        email: emailSignup,
        password: passwordSignup
      })
        .then(() => {
          // Data saved successfully!
          alert("Succesfully Signed Up!");
        })
        .catch((error) => {
          //the write failed
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

signinButton.addEventListener("click", (e) => {
  let emailSignin = document.getElementById("email_signin").value;
  let passwordSignin = document.getElementById("psw_signin").value;
  signInWithEmailAndPassword(auth, emailSignin, passwordSignin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      let lgDate = new Date();
      update(ref(database, "users/" + user.uid), {
        last_login: lgDate
      })
        .then(() => {
          // Data saved successfully!
          alert("Successfully Login");
          location.href = "https://www.ioxtechglobal.com/admin/";
        })
        .catch((error) => {
          //the write failed
          alert("Failed to login");
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
