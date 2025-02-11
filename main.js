document.addEventListener("DOMContentLoaded", function() {
    const tg = window.Telegram.WebApp;
    const authData = localStorage.getItem("tg_auth");

    if (!tg.initDataUnsafe?.user && !authData) {
        window.location.href = "index.html";  // Redirect to login if not authorized
        return;
    }

    const user = tg.initDataUnsafe?.user || new URLSearchParams(authData);
    document.getElementById("user-name").innerText = `Hello, ${user.get("first_name") || "User"}`;
    document.getElementById("user-photo").src = user.get("photo_url") || "default-avatar.png";

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const claimBtn = document.getElementById("claim-btn");

    checkboxes.forEach(cb => cb.addEventListener("change", () => {
        claimBtn.disabled = !Array.from(checkboxes).every(cb => cb.checked);
    }));

    claimBtn.addEventListener("click", function() {
        tg.sendData("Airdrop Claimed!");
        tg.close();
    });
});

function logout() {
    localStorage.removeItem("tg_auth");
    window.location.href = "index.html";
}
