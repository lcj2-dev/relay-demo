const { WebSocketServer } = require('ws');
const { generateTimestamp } = require('../utils');

const numbersSocket = new WebSocketServer({ noServer: true });

numbersSocket.on('connection', ws => {
  console.log(`[${generateTimestamp()}] New connection on /numbers`);

  ws.on('error', console.error);

  ws.on('close', () => {
    console.log(`[${generateTimestamp()}] Connection dropped on /numbers`);
  });
});

module.exports = numbersSocket;
