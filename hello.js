 var http = require('http');
 var port = procress.env.PORT || 3000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hi, my name is Noble and I live in New York');
  res.end();
}).listen(port);
