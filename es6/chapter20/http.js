const http = require('http');

const server = http.createServer(function(req, res) {
  console.log(`${req.method} ${req.url}`);
  res.end("Hello World!");
});

const port = 7000;
server.listen(port, function() {
  //서버가 시작됏을 때 호출된 콜백..
  console.log(`server started on port ${port}`)
})


// server started on port 7000
// GET /
// GET /favicon.ico