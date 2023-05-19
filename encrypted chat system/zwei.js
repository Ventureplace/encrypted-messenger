document.addEventListener('DOMContentLoaded', () => {
  const socket = io();

  const messageForm = document.querySelector('#message-form');
  const inputMessage = document.querySelector('#input-message');
  const messagesList = document.querySelector('#messages');

  messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = inputMessage.value.trim();
    if (message !== '') {
      socket.emit('chat message', message);
      inputMessage.value = '';
    }
  });

  socket.on('chat message', (message) => {
    const li = document.createElement('li');
    li.textContent = message;
    messagesList.appendChild(li);
  });
});
