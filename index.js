const app = require('express')();

const auth = require('http-auth');
//const bodyParser = require('body-parser');
// app.use(bodyParser.json()); // Soporta json encoded bodies
// app.use(bodyParser.urlencoded({ // Soporta encoded bodies
//     extended: true
// }));

var digest = auth.digest({
    realm: 'Sample',
    file: __dirname + "/users.htdigest"
});

app.get('/',digest.check((req,res)=>{
    console.log(req.auth);
    res.send('helloworld');
}));
// Levantamos servidor
app.listen(3000, () => {
    console.log('running');
});