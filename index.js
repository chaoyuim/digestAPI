

var express = require('express');
var http = require('http');
const auth = require('http-auth');

var digest = auth.digest({
    realm: 'Sample',
    file: __dirname + "/users.htdigest"
});
var app = express();
app.use(digest.check());
http.createServer(app);
app.get('/digestapi',digest.check((req,res)=>{
    console.log(req.auth);
    res.send({ username: 'whatever json' });
}));
app.listen(3000,()=>{
    console.log('running on port 30001');
});



