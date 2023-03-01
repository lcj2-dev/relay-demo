const { WebSocket } = require('ws');
const { numbersSocket } = require('../sockets');

setInterval(() => {
  const data = Math.floor(Math.random() * 1000000000);

  numbersSocket.clients.forEach(client => {
    if (client.readyState == WebSocket.OPEN) {
      client.send(data);
    }
  });
}, 1000);
