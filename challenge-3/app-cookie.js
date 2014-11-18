/**
 * Created with IntelliJ IDEA.
 * User: amunoz
 * Date: 11/18/14
 * Time: 11:31
 * To change this template use File | Settings | File Templates.
 */
var express = require('express'),
    cookieSessions = require('./cookie-sessions'),
    cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser('noice'));///noice = secret
app.use(cookieSessions('sid'));

app.get('/', function(req, res){
    req.session.count = req.session.count || 0;
    var n = req.session.count++;
    res.send('viewed ' + n + ' times\n');
});

app.listen(3000);