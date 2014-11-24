/**
 * Created with IntelliJ IDEA.
 * User: amunoz
 * Date: 11/18/14
 * Time: 12:07
 * To change this template use File | Settings | File Templates.
 */
var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    favicon = require('serve-favicon'),
    serveStatic = require('serve-static'),
    errorHandler = require('errorhandler'),
    Post = require('./Post'),
    basicAuth = require('basic-auth');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(serveStatic(path.join(__dirname, 'public')));
app.use(errorHandler());

//auth middleware
var auth = function(req, res, next){
    function unauthorize(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.send(401);
    }

    var user = basicAuth(req);
    console.log(user);

    if(!user || !user.name || !user.pass){
        return unauthorize(res);
    }

    if(user.name === 'angel' && user.pass === 'secret'){
        return next();
    } else  {
        return unauthorize(res);
    }

};

//Render our home page with all blog posts
app.get('/', function(request, response){
    //: How do we get  a list of all mode objects using a mongoose model?
    Post.find(function(err, posts){
        if(err){
            response.send(500, 'There was an error - tough luck.');
        } else {
            response.render('index', {
                posts: posts
            });
        }
    });
});

//Render a form to enter a new post
app.get('/new', function(request, response){
    response.render('new',{});
});

//Create a new blog post object
app.post('/create', auth, function(request, response){
    //: Create and save a Post model
    var post = new Post({
        title: request.body.title,
        content:request.body.content
    });

    //:Save the model
    post.save(function(err, model){
        if(err){
            response.send(500, 'There was an error - tough luck.');
        } else {
            response.redirect('/');
        }
    });
});



http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});