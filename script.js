document.addEventListener('DOMContentLoaded', () => {
    const socket = io();

    socket.on('message', (msg) => {
        displayMessage(msg);
    });

    function sendMessage() {
        const messageInput = document.getElementById('messageInput');
        const message = messageInput.value.trim();

        if (message !== '') {
            socket.emit('message', message);
            messageInput.value = '';
        }
    }

    function displayMessage(message) {
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.innerText = message;
    }
});
