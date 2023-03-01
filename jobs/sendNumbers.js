const { WebSocket } = require('ws');
const { numbersSocket } = require('../sockets');

setInterval(() => {
  numbersSocket.clients.forEach(client => {
    if (client.readyState == WebSocket.OPEN) {
      client.send(Math.floor(Math.random() * 1000000000));
    }
  });
}, 1000);

//
