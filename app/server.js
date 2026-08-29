const http = require('node:http');

const PORT = process.env.PORT || 3000;

function createServer() {
  return http.createServer((req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'healthy' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ service: 'aws-cicd-demo', status: 'running' }));
  });
}

if (require.main === module) {
  createServer().listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = { createServer };
