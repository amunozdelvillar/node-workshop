/**
 * Created with IntelliJ IDEA.
 * User: amunoz
 * Date: 11/17/14
 * Time: 10:30
 * To change this template use File | Settings | File Templates.
 */

//: expose a function called "info" which prints the date and logging string
exports.info = function(msg){
    console.log(new Date() + ':' + msg);
};
