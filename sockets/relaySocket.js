const { WebSocketServer, WebSocket } = require('ws');
const { generateTimestamp } = require('../utils');

const relaySocket = new WebSocketServer({ noServer: true });

relaySocket.on('connection', ws => {
  console.log(`[${generateTimestamp()}] New connection on /boards`);

  ws.on('error', console.error);

  ws.on('close', () => {
    console.log(`[${generateTimestamp()}] Connection dropped on /boards`);
  });

  ws.on('message', data => {
    console.log(data.toString());

    relaySocket.clients.forEach(client => {
      if (client.readyState == WebSocket.OPEN && client != ws) {
        client.send(data.toString());
      }
    });
  });
});

module.exports = relaySocket;
