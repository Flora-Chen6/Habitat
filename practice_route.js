var express = require('express');
var app = express();

app.route('/Node').get(function(req,res)
{
    res.send("Welcome to Atlanta Habitat for Humanities");
});
app.route('/Angular').get(function(req,res)
{
    res.send("Tutorial on Angular");
});
app.get('/',function(req,res){
    res.send('Welcome to Guru99 Tutorials');
});

var server=app.listen(AHFH,function() {});
