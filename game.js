const player = document.getElementById('player');
const gameContainer = document.getElementById('game-container');

// Event listeners for both keyboard and touch events
document.addEventListener('keydown', movePlayer);
gameContainer.addEventListener('touchstart', handleTouchStart);
gameContainer.addEventListener('touchmove', handleTouchMove);

let touchStartX = 0;

function movePlayer(event) {
    const speed = 10;

    switch(event.key) {
        case 'ArrowUp':
            player.style.top = `${player.offsetTop - speed}px`;
            break;
        case 'ArrowDown':
            player.style.top = `${player.offsetTop + speed}px`;
            break;
        case 'ArrowLeft':
            player.style.left = `${player.offsetLeft - speed}px`;
            break;
        case 'ArrowRight':
            player.style.left = `${player.offsetLeft + speed}px`;
            break;
    }
}

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    if (!touchStartX) {
        return;
    }

    const touchEndX = event.touches[0].clientX;
    const touchDiff = touchEndX - touchStartX;

    // Adjust the sensitivity as needed
    const sensitivity = 2;

    if (touchDiff > sensitivity) {
        player.style.left = `${player.offsetLeft + 10}px`;
    } else if (touchDiff < -sensitivity) {
        player.style.left = `${player.offsetLeft - 10}px`;
    }

    touchStartX = 0;
}
