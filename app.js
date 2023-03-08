const server = require('./server');
require('./jobs');
require('./router');

const PORT = 8080;

server.listen(PORT);

console.log(`Server is working on port ${PORT}`);
