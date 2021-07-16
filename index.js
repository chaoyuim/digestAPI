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

var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');
const auth = require('http-auth');

var digest = auth.digest({
    realm: 'Sample',
    file: __dirname + "/users.htdigest"
});

var options = {
  key: fs.readFileSync('.pem'),
  cert: fs.readFileSync('.cert')
};

var app = express();
app.use(digest.check());

https.createServer(options, app)

app.get('/',digest.check((req,res)=>{
    console.log(req.auth);
    res.send({ username: 'whatever json' });
}));

https.listen(3001);



