// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDog6RQTKaiPmSzxduiPPV02CSDgC6MBWA",
    authDomain: "interiocontact-1941d.firebaseapp.com",
    databaseURL: "https://interiocontact-1941d-default-rtdb.firebaseio.com",
    projectId: "interiocontact-1941d",
    storageBucket: "interiocontact-1941d.firebasestorage.app",
    messagingSenderId: "30846601042",
    appId: "1:30846601042:web:c08011cda1532aa9d9dc8b"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(database, "contactMessages");

// Form Submit Event
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Push data to Firebase Realtime Database
    push(dbRef, {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toISOString()
    }).then(() => {
        alert("Your message has been sent successfully!");
        document.getElementById("contact-form").reset(); // Clear form after submission
    }).catch((error) => {
        alert("Error: " + error.message);
    });
});
