// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBj_XFwSi9CATeMpMZdKQoQRd-rBt-85iE",
  authDomain: "virus-945ac.firebaseapp.com",
  databaseURL: "https://virus-945ac-default-rtdb.firebaseio.com",
  projectId: "virus-945ac",
  storageBucket: "virus-945ac.firebasestorage.app",
  messagingSenderId: "248199210206",
  appId: "1:248199210206:web:a2053fd638d8274103ce4f",
  measurementId: "G-P9NPJ5KH0K"
};

// ✅ Firebase Initialize
firebase.initializeApp(firebaseConfig);
const db = firebase.database(); // Firebase Realtime Database

// ✅ Function to Save User Data
function saveUserData(user) {
    if (!user) return;
    
    db.ref("users/" + user.id).set({
        username: user.username || "Unknown",
        id: user.id,
        photo: user.photo_url || "",
        joinedAt: new Date().toISOString()
    })
    .then(() => console.log("✅ User data saved"))
    .catch(error => console.error("❌ Firebase Error:", error));
}
