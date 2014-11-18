/**
 * Created with IntelliJ IDEA.
 * User: amunoz
 * Date: 11/17/14
 * Time: 10:29
 * To change this template use File | Settings | File Templates.
 */
    //: What do we need to make Underscore 'requireable'?
var _ = require('underscore');

function Person(properties){
    _.extend(this, {
        knowsKunkFu:false
    }, properties);
}

//: How do we expose the constructor AS the module?
module.exports = Person;