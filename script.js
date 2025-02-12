// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyBj_XFwSi9CATeMpMZdKQoQRd",
    authDomain: "virus-945ac.firebaseapp.com",
    databaseURL: "https://virus-945ac-default-rtdb.firebaseio.com",
    projectId: "virus-945ac",
    storageBucket: "virus-945ac.firebasestorage.app",
    messagingSenderId: "248199210206",
    appId: "1:248199210206:web:a2053fd638d8274103ce4f"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Fetch User Data
function fetchUserData() {
    const userId = "USER_ID";  // Replace with dynamic user ID

    database.ref("users/" + userId).once("value", (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            document.getElementById("username").innerText = data.username;
            document.getElementById("userBalance").innerText = data.balance + " VIRUS";
            document.getElementById("userAvatar").src = data.avatarURL;
        } else {
            console.log("User data not found");
        }
    });
}

// Connect Wallet Function
function connectWallet() {
    alert("Wallet Connected!");
}

// Rotate Token Logo on Hover
document.getElementById("virusLogo").addEventListener("mouseenter", () => {
    document.getElementById("virusLogo").style.transform = "rotate(360deg)";
    document.getElementById("virusLogo").style.transition = "all 0.5s";
});

// Load User Data
fetchUserData();
