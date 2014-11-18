/**
 * Created with IntelliJ IDEA.
 * User: amunoz
 * Date: 11/17/14
 * Time: 10:30
 * To change this template use File | Settings | File Templates.
 */
var logger = require('./logger');
var Person = require('./Person');

var angel = new Person({
    firstName: 'Angel',
    lastName: 'Munoz',
    age: 24,
    knowsKungFu:true
});

logger.info('Does ' + angel.firstName + ' know Kung-Fu?');
logger.info(angel.knowsKungFu ? 'You better believe it!' : 'Nope.jpg :(');