/**
 * Created with IntelliJ IDEA.
 * User: amunoz
 * Date: 11/18/14
 * Time: 14:03
 * To change this template use File | Settings | File Templates.
 */
//Require mongoose
var mongoose = require('mongoose');

//TODO:Configure connection URL ( only needs to happen once per app )
mongoose.connect('mongodb://127.0.0.1:27017/mydb');

//Create a database schema for our Post object, which will describe both it's data and it's behavior.
var postSchema = mongoose.Schema({
    title:   String,
    content: String
});

//Create a model object constructor that will have ODM functinality like .save()...
var Post = mongoose.model('Post', postSchema);

//Expose out a model as the module interface
module.exports = Post;