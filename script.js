let tokenLogo = document.getElementById("token-logo");
let startX = 0;
let isSliding = false;

tokenLogo.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
    isSliding = true;
});

tokenLogo.addEventListener("touchmove", (event) => {
    if (!isSliding) return;
    let moveX = event.touches[0].clientX;
    let diff = moveX - startX;
    let rotation = diff * 0.5; // Control rotation speed
    tokenLogo.style.transform = `rotate(${rotation}deg)`;
});

tokenLogo.addEventListener("touchend", () => {
    isSliding = false;
});
