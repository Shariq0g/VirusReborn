// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBj_XFwSi9CATeMpMZdKQoQRd-rBt-85iE",
    authDomain: "virus-945ac.firebaseapp.com",
    databaseURL: "https://virus-945ac-default-rtdb.firebaseio.com",
    projectId: "virus-945ac",
    storageBucket: "virus-945ac.appspot.com", // Yeh storageBucket galat tha, sahi kiya
    messagingSenderId: "248199210206",
    appId: "1:248199210206:web:a2053fd638d8274103ce4f",
    measurementId: "G-P9NPJ5KH0K"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database(); // Realtime Database ke liye

// Agar Firestore use kar rahe hain to:
const firestore = firebase.firestore(); 

// Agar Authentication use kar rahe hain to:
const auth = firebase.auth();
