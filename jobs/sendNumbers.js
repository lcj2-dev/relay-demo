const { WebSocket } = require('ws');
const { numbersSocket } = require('../sockets');

setInterval(() => {
  numbersSocket.clients.forEach(client => {
    if (client.readyState == WebSocket.OPEN) {
      client.send('test');
    }
  });
}, 1000);
