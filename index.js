// const https = require('https');
// const fs = require('fs');
// const app = require('express')();
// const auth = require('http-auth');

// var digest = auth.digest({
//     realm: 'Sample',
//     file: __dirname + "/users.htdigest"
// });
// const options = {
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
//   };

// https.createServer(options,app);

// app.get('/',digest.check((req,res)=>{
//     console.log(req.auth);
//     res.send({ username: 'whatever json' });
// }));
// // Levantamos servidor
// app.listen(3001, () => {
//     console.log('running');
// });




const crypto = require('crypto'),
      fs = require("fs"),
      http = require("http");

var privateKey = fs.readFileSync('client-key.pem').toString();
var certificate = fs.readFileSync('client-cert.pem').toString();

var credentials = crypto.createCredentials({key: privateKey, cert: certificate});

var handler = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
};

var server = http.createServer();
server.setSecure(credentials);
server.addListener("request", handler);
server.listen(3001);