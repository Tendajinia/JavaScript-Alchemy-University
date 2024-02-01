//Running a Node Server
/*
const http = require('http');

const server = http.createServer(function(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
});

server.listen({ port: 3000, host: 'localhost' }, function() {
  console.log('Server is running!');
});*/

/*
 run node index from a terminal located in the directory. You should see the message "Server is running!" logged.

Finally, you can go in your browser and type http://localhost:3000/ in the browser bar to see the response "Hello World" in text.
*/

//Creating a server
const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
  });

/*
  //Listening
  server.listen({ port: 3000, host: 'localhost' }, function() {
    console.log('Server is running!');
  });*/

  