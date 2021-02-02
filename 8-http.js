const http = require('http'); // importing http module

// you can create your own server
http.createServer( (req, res) => {
  console.log('Request is Received');
  
  res.write('Welcome to my Home Page!');
  res.end();

}).listen(3000, () => {
  console.log('Server Started in Port 3000. You can check the app here -> http://localhost:3000/');
});