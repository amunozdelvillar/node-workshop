/**
 * Created with IntelliJ IDEA.
 * User: amunoz
 * Date: 11/17/14
 * Time: 15:38
 * To change this template use File | Settings | File Templates.
 */
//Module dependencies
var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    favicon = require('serve-favicon'),
    serveStatic = require('serve-static'),
    errorHandler = require('errorhandler');

//Create an express app
var app = express(),
    env = process.env.NODE_ENV || 'development';

//Configure an express app
//app.configure(function(){
    app.set('port',process.env.PORT || 3000);
    app.set('views',__dirname + '/views');
    app.set('view engine','ejs');
    //app.use(express.favicon());
    app.use(favicon(__dirname + '/public/favicon.ico'));
    //app.use(express.logger('dev'));
    app.use(morgan('combined'));
    app.use(bodyParser.urlencoded({extended: true}));//instead of body parser()
    app.use(bodyParser.json());//parse application/json
    //app.use(express.methodOverride());
    app.use(methodOverride('_method'));
    //app.use(app.router); //DEPRECATED
    app.use(serveStatic(path.join(__dirname, 'public')));
//});

if('development' === env){
    app.use(errorHandler());
};

//Store 'session' information. To see how to store sessions in a cookie, check out
//Https://gist.github.com/visionmedia/1491756
var sessionInfo = {
    name: 'Guest',
    isAdmin:false
}

//Create session middleware
var session = function(request,response,next){
    //: how do we store session data on the request?
    request.sessionInfo = sessionInfo;
    //: How do we continue with the request chain?
    next();
}

//Handle GET request to root URL
app.get('/', session , function(request,response){
    //: How do we render the 'index.ejs' template from the /views dir?
    response.render('index',request.sessionInfo);
});

app.post('/login', function(request,response){
    //: Update our session state with the username submitted by the form.
    var name = request.body.username,
        pwd  = request.body.password;
    sessionInfo.name = name;
    var ADMIN = {
        name: 'admin',
        pwd:  'admin'
    }
    if(name === ADMIN.name && pwd === ADMIN.pwd){
        sessionInfo.isAdmin = true;
    }
    console.log(request.body);

    //: How do we send the user back to '/' after the request?
    response.redirect('/');
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port') + ' - visit http://localhost:3000/');
});