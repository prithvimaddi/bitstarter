var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile('index.html', function(err, data){
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(data,'utf-8');
      //response.send(data);
  })
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
