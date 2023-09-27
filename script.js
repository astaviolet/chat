function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== '') {
        const messageContainer = document.getElementById('messageContainer');

        while (messageContainer.firstChild) {
            messageContainer.removeChild(messageContainer.firstChild);
        }

        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.innerText = message;

        messageContainer.appendChild(newMessage);

        messageInput.value = '';
    }
}
