// ✅ Supabase Credentials
const SUPABASE_URL = "https://goyxtmubqhwilshcvqsp.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"; // Isko secure rakhna!
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ✅ Telegram Mini App ke User Fetch Karna
async function getUserData() {
    document.getElementById("loading").innerText = "Fetching Data...";

    // Telegram WebApp API se user fetch karna
    const tg = window.Telegram.WebApp;
    tg.expand(); // Fullscreen mode enable karo
    let username = tg.initDataUnsafe.user?.username || "guest_user";

    // ✅ Database se Balance Fetch Karo
    let { data, error } = await supabase
        .from("users")
        .select("balance")
        .eq("username", username)
        .single();

    if (error) {
        console.error("Error fetching user data:", error);
        document.getElementById("balance").innerText = "Balance: Error!";
        return;
    }

    document.getElementById("username").innerText = `Username: ${username}`;
    document.getElementById("balance").innerText = `Balance: ${data ? data.balance : 0}`;

    document.getElementById("loading").style.display = "none"; // Hide loading
}

// ✅ Function Call
getUserData();
