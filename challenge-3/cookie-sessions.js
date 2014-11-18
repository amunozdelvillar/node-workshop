/**
 * Created with IntelliJ IDEA.
 * User: amunoz
 * Date: 11/18/14
 * Time: 11:28
 * To change this template use File | Settings | File Templates.
 */
module.exports = function(name){
    return function(req, res, next){
        req.session = req.signedCookies[name] || {};

        res.on('header', function(){
            res.signedCookie(name, req.session, { signed: true });
        });

        next();
    }
};