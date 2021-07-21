
var express = require('express');
var http = require('http');
const auth = require('http-auth');

var digest = auth.digest({
    realm: 'Sample',
    file: __dirname + "/users.htdigest"
});
var app = express();

http.createServer(app,digest.check());
app.get('/digestapi',digest.check((req,res)=>{
    console.log(req.auth);
    res.send({ username: 'whatever json' });
}));
app.listen(3000,()=>{
    console.log('running on port 3000');
});


