// ✅ Supabase Initialize karo
const supabase = supabase.createClient(
    "https://goyxtmubqhwilshcvqsp.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdveXh0bXVicWh3aWxzaGN2cXNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1MzU1MjgsImV4cCI6MjA1NTExMTUyOH0.fXQ_rsAlEBRCe7Bw947n4XyNDz2vPl_T_cFxFhA1Mks"
);

// ✅ User ka Balance Fetch karna
async function fetchBalance(username) {
    try {
        const { data, error } = await supabase
            .from("users")
            .select("balance")
            .eq("username", username)
            .single();

        if (error) throw error;
        document.getElementById("balance").innerText = `Balance: ${data.balance}`;
        document.getElementById("loading").innerText = "";
    } catch (err) {
        console.error("Error fetching balance:", err.message);
        document.getElementById("loading").innerText = "Failed to load balance.";
    }
}

// ✅ Telegram Username Fetch karo
async function initApp() {
    const tg = window.Telegram.WebApp;
    tg.expand();  // Fullscreen Mode

    const username = tg.initDataUnsafe?.user?.username;
    if (username) {
        fetchBalance(username);
    } else {
        document.getElementById("loading").innerText = "Telegram Login Required!";
    }
}

// ✅ App Initialize karo
window.onload = initApp;
