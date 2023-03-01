const { parse } = require('url');
const server = require('./server');

const { numbersSocket, broadcastSocket } = require('./sockets');

server.on('upgrade', (request, socket, head) => {
  const { pathname } = parse(request.url);

  switch (pathname) {
    case '/numbers':
      numbersSocket.handleUpgrade(request, socket, head, ws => {
        numbersSocket.emit('connection', ws, request);
      });
      break;
    case '/chat':
      broadcastSocket.handleUpgrade(request, socket, head, ws => {
        broadcastSocket.emit('connection', ws, request);
      });
      break;
    default:
      socket.destroy();
  }
});
