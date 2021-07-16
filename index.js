const https = require('https');
const fs = require('fs');
const app = require('express')();
const auth = require('http-auth');

var digest = auth.digest({
    realm: 'Sample',
    file: __dirname + "/users.htdigest"
});
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };

https.createServer(options,app);

app.get('/',digest.check((req,res)=>{
    console.log(req.auth);
    res.send({ username: 'whatever json' });
}));
// Levantamos servidor
app.listen(3001, () => {
    console.log('running');
});








