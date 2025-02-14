// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBj_XFwSi9CATeMpMZdKQoQRd-rBt-85iE",
    authDomain: "virus-945ac.firebaseapp.com",
    databaseURL: "https://virus-945ac-default-rtdb.firebaseio.com",
    projectId: "virus-945ac",
    storageBucket: "virus-945ac.appspot.com",
    messagingSenderId: "248199210206",
    appId: "1:248199210206:web:a2053fd638d8274103ce4f",
    measurementId: "G-P9NPJ5KH0K"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ✅ User ID Set Karna (Telegram ID se)
const userId = "example_user"; // Yeh replace karo apne Telegram ID se

// ✅ User Reference (Database Path)
const userRef = database.ref("users/" + userId);

// ✅ Default Balance Set Karega Agar User Exist Nahi Karta
userRef.once("value").then((snapshot) => {
    if (!snapshot.exists()) {
        userRef.set({
            balance: 100 // Default Balance
        }).then(() => {
            console.log("New user added with default balance: 100");
        }).catch((error) => {
            console.error("Firebase Write Error:", error);
        });
    }
});

// ✅ Balance Fetch Karke Update Karna
function updateBalance() {
    userRef.child("balance").on("value", (snapshot) => {
        if (snapshot.exists()) {
            const balance = snapshot.val();
            document.getElementById("balance").innerText = balance;
        } else {
            document.getElementById("balance").innerText = "--";
        }
    });
}

// ✅ Function Call Karo Page Load Hone Par
updateBalance();
