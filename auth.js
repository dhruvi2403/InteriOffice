// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA8eJdwECijQ5EKRvZwFFojaeaKb8Wjs_g",
    authDomain: "interioauth.firebaseapp.com",
    projectId: "interioauth",
    storageBucket: "interioauth.firebasestorage.app",
    messagingSenderId: "125680551139",
    appId: "1:125680551139:web:427403cf08fdf4834ef1d6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Functionality
const signupForm = document.getElementById("signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("signup-name").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert(`Sign-up successful! Welcome, ${name}`);
                window.location.href = "login.html";
            })
            .catch((error) => {
                alert(`Error: ${error.message}`);
            });
    });
}

// Sign In Functionality
const signinForm = document.getElementById("signin-form");
if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("signin-email").value;
        const password = document.getElementById("signin-password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Sign-in successful!");
                window.location.href = "index.html"; // Redirect to homepage after login
            })
            .catch((error) => {
                alert(`Error: ${error.message}`);
            });
    });
}
