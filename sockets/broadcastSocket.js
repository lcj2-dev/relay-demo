const { WebSocketServer, WebSocket } = require('ws');
const { generateTimestamp } = require('../utils');

const broadcastSocket = new WebSocketServer({ noServer: true });

broadcastSocket.on('connection', ws => {
  console.log(`[${generateTimestamp()}] New connection on /chat`);

  ws.on('error', console.error);

  ws.on('close', () => {
    console.log(`[${generateTimestamp()}] Connection dropped on /chat`);
  });

  ws.on('message', data => {
    const { user, payload } = JSON.parse(data.toString());

    console.log(
      `[${generateTimestamp()}] New chat message from ${user}: ${payload}`
    );

    broadcastSocket.clients.forEach(client => {
      if (client.readyState == WebSocket.OPEN && client != ws) {
        client.send(data.toString());
      }
    });
  });
});

module.exports = broadcastSocket;
