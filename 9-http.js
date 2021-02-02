const http = require('http');

http.createServer( (req, res)=> {
  
  console.log('Request Received');

  // req obj will have URL, request method, req params/url params, query params
  console.log(req.url);

  res.writeHead(200, { "Content-Type": "text/html"} );
  res.write(`<html>
    <head>
      <title>Welcome to Home Page!</title>
    </head>
    <body>
      <h1>Welcome to Home Page!</h1>
    </body>
  </html>`);

  res.end();

}).listen(3000, () => {
  console.log('Server Started in Port 3000. You can check the app here -> http://localhost:3000/');
})