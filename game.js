// Keyboard controls
document.addEventListener("keydown", (event) => {

    if (!gameRunning) return;

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        playerX -= 30;
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        playerX += 30;
    }

    // Keep player inside road
    const minX = 10;
    const maxX = gameArea.clientWidth - player.offsetWidth - 10;

    if (playerX < minX) {
        playerX = minX;
    }

    if (playerX > maxX) {
        playerX = maxX;
    }

    player.style.left = playerX + "px";
});