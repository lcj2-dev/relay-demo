const { createServer } = require('http');
const { parse } = require('url');

const { numbersSocket, broadcastSocket } = require('./sockets');

require('./jobs');

const server = createServer();

server.on('upgrade', (request, socket, head) => {
  const { pathname } = parse(request.url);

  switch (pathname) {
    case '/numbers':
      numbersSocket.handleUpgrade(request, socket, head, ws => {
        numbersSocket.emit('connection', ws, request);
      });
      break;
    case '/bar':
      broadcastSocket.handleUpgrade(request, socket, head, ws => {
        broadcastSocket.emit('connection', ws, request);
      });
      break;
    default:
      socket.destroy();
  }
});

server.listen(8080);
