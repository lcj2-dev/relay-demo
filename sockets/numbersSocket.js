const { WebSocketServer } = require('ws');

const numbersSocket = new WebSocketServer({ noServer: true });

numbersSocket.on('connection', ws => {
  ws.on('error', console.error);

  ws.on('message', data => {
    console.log('received: %s', data);
  });
});

module.exports = numbersSocket;
