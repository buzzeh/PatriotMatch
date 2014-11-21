var http = require("http");
var path = require('path');
var express = require('express');
var app = express();

app.configure(function() {
    app.use(express.static(__dirname + '/ui'));
    
});


app.get('/Login', function(req, res){
  res.sendfile("ui/Login.html");
});

app.get('/redeem', function(req, res){
  res.sendfile("ui/code.html");
});

app.get('/questions', function(req, res){
  res.sendfile("ui/questions.html");
});


var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    console.log('Listening on port %d', server.address().port);
});
