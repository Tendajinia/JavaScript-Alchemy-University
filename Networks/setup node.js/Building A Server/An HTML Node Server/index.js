/*

const http = require('http');
// add the fs library for reading from the file system
const fs = require('fs');

const server = http.createServer((request, response) => {
  // we'll attempt to read from the index.html file
  fs.readFile('index.html', function(err, content) {
    if(err) {
        // readFile will return an error if it was unable to successfully read the content
        // if this happens, let's return an error response back from the server
  response.statusCode = 500;
  response.end("Could not serve index.html"); 
}
else{
    // if there is no error, we'll serve the HTML we read from the file!
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(content);
}
});
});
*/
const server = http.createServer((request, response) => {
  // by default we'll serve index.html
  let filename = "index.html";
  let contentType = "text/html";
  // if the client is requesting style.css, we'll serve it instead
  if(request.url === "/style.css") {
    filename = "style.css";
    contentType = "text/css";
  }
  fs.readFile(filename, function(err, content) {
    if(err) {
        response.statusCode = 500;
        response.end(`Could not serve ${filename}`);
    }
    else {
        response.statusCode = 200;
        response.setHeader('Content-Type', contentType);
        response.end(content);
    }
  });
});
