document.addEventListener('DOMContentLoaded', () => {
    const socket = io(); // Conexão com o servidor Socket.IO

    socket.on('message', (msg) => {
        appendMessage(msg);
    });

    function appendMessage(message) {
        const chat = document.getElementById('chat');
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        chat.appendChild(messageElement);
    }

    function sendMessage() {
        const message = document.getElementById('message').value;
        socket.emit('message', message); // Envia mensagem para o servidor
        document.getElementById('message').value = ''; // Limpa a caixa de entrada
    }
});
