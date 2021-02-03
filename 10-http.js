const http = require('http');

http.createServer( (req, res)=> {
  
  console.log('Request Received');

  // req obj will have URL, request method, req params/url params, query params
  console.log(req.url);

  res.writeHead(200, { "Content-Type": "text/html"} );

  switch(req.url){
    case '/': 
      res.write(`<html>
      <head>
        <title>Welcome to Home Page!</title>
      </head>
      <body>
        <h1>Welcome to Home Page!</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </body>
    </html>`);
      break;
    
    case '/about':
      res.write(`<html>
      <head>
        <title>Welcome to About Page!</title>
      </head>
      <body>
        <h1>Welcome to About Page!</h1>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      </body>
    </html>`);
      break;
  
    case '/contact':
      res.write(`<html>
      <head>
        <title>Welcome to Contact Page!</title>
      </head>
      <body>
        <h1>Welcome to Contact Page!</h1>
      </body>
    </html>`);
      break;
    
    default:
      res.writeHead(404, { "Content-Type": "text/html"} );
      res.write(`<html>
      <head>
        <title>404 - Page not found</title>
      </head>
      <body>
        <h1>404 - Page not found</h1>
      </body>
    </html>`);

  }
  
  res.end();

}).listen(3000, () => {
  console.log('Server Started in Port 3000. You can check the app here -> http://localhost:3000/');
})