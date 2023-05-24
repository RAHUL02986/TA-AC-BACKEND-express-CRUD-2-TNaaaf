var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title : {type:String,reqired:true},
    description :{type:String,required:true},
    tags : {type:[String], required: true},
    author :String,
    likes: {type:Number,default:0}

})

var Article = mongoose.model("Article",articleSchema);

module.exports = Article;