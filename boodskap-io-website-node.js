/*******************************
 * Import Required Modules
 ****************************/
var express = require('express');
var bodyParser = require('body-parser');
var layout = require('express-layout');
var path = require("path")
var app = express();
var cookieParser = require('cookie-parser')
var session = require('cookie-session');
var compression = require('compression')
var elasticemail = require('elasticemail');


/*******************************
 * Require Configuration
 ****************************/
var conf = require('./conf');


app.use(bodyParser());


// compress all responses
app.use(compression())

//For Static Files
app.set('views', path.join(__dirname, 'views'));


var options = {
    // maxAge: '1d',
    // setHeaders: function (res, path, stat) {
    //     res.set('vary', 'Accept-Encoding');
    //     res.set('x-timestamp', Date.now());
    // }
};

var controllerOptions = {
    // maxAge: 0,
    // setHeaders: function (res, path, stat) {
    //     res.set('vary', 'Accept-Encoding');
    //     res.set('x-timestamp', Date.now());
    // }
};

app.use('/css', express.static(__dirname + '/webapps/css', options));
app.use('/images', express.static(__dirname + '/webapps/images', options));
app.use('/plugins', express.static(__dirname + '/webapps/js', options));
app.use('/fonts', express.static(__dirname + '/webapps/fonts', options));
app.use('/js', express.static(__dirname + '/webapps/js', options));

app.use('/controllers', express.static(__dirname + '/webapps/js', controllerOptions));
app.use(express.static(__dirname + '/webapps', controllerOptions));


app.use(layout());

app.use(cookieParser('a deep secret'));
app.use(session({secret: '1234567890QWERTY'}));


//For Template Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set("view options", {layout: "layout.html"});



var emailClient = elasticemail.createClient({
    username: conf.elasticEmail.username,
    apiKey: conf.elasticEmail.apiKey
});





var server = require('http').Server(app);


app.conf = conf;
app.emailClient = emailClient;

console.log("************************************************************");
console.log(new Date() + ' | Boodskap.io Website Portal Listening on ' + conf['web']['port']);
console.log("************************************************************");

server.listen(conf['web']['port']);


//Initializing the web routes
var Routes = require('./routes/http-routes');
new Routes(app);




