const { WebSocketServer } = require('ws');

const boradcastSocket = new WebSocketServer({ noServer: true });

boradcastSocket.on('connection', ws => {
  ws.on('error', console.error);

  ws.on('message', data => {
    console.log('received: %s', data);
  });
});

module.exports = boradcastSocket;
