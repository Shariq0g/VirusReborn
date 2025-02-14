// 🛠️ Supabase Client Setup
const { createClient } = supabase;
const supabaseUrl = "https://goyxtmubqhwilshcvqsp.supabase.co";  // <-- Replace this!
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";  // <-- Replace this!
const supabaseClient = createClient(supabaseUrl, supabaseKey);

// 🚀 Telegram Mini App Init
const tg = window.Telegram.WebApp;
tg.expand(); // Fullscreen enable

// 🏷️ User info fetch
const userData = tg.initDataUnsafe.user;
if (!userData) {
    document.getElementById("loading").innerText = "Failed to load user data!";
} else {
    const userId = userData.id;
    const username = userData.username || `User_${userId}`;

    // 🔄 Fetch User Balance from Supabase
    async function fetchUserBalance() {
        let { data: user, error } = await supabaseClient
            .from("users")
            .select("balance")
            .eq("user_id", userId)
            .single();

        if (error || !user) {
            console.log("User not found, inserting new user...");
            await supabaseClient.from("users").insert([{ 
                user_id: userId, 
                username: username, 
                balance: 0 
            }]);
            document.getElementById("balance").innerText = "Balance: 0";
        } else {
            document.getElementById("balance").innerText = `Balance: ${user.balance}`;
        }
    }

    fetchUserBalance();
}
