document.addEventListener("DOMContentLoaded", function () {
    const userBalanceElement = document.getElementById("userBalance");
    const loadingElement = document.getElementById("loading");

    // Example: Fetching user balance
    function fetchUserBalance() {
        const userId = "example_user"; // Replace with actual user ID
        const userRef = database.ref("users/" + userId + "/balance");

        userRef.once("value", (snapshot) => {
            const balance = snapshot.val();
            if (balance !== null) {
                userBalanceElement.innerText = `Balance: ${balance}`;
                loadingElement.style.display = "none";
            } else {
                userBalanceElement.innerText = "Balance: Not Found";
            }
        }).catch((error) => {
            console.error("Error fetching balance:", error);
            userBalanceElement.innerText = "Error loading balance";
        });
    }

    // Call function
    fetchUserBalance();
});
