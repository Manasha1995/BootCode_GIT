var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyparser = require('body-parser');

app.use(bodyparser()); //if something in POST methos, pass through body-parser
app.use('/mycssfiles',express.static(__dirname+'/css'));

//GET method
app.get("/", function(req,res){
    res.sendFile('home.html',{root:__dirname});
});

//POST method
app.post("/user", function(req,res){
    res.send("my first name is : "+ JSON.stringify(req.body.fname)+" "+ JSON.stringify(req.body.lname));
});

//Listen to server
app.listen(3000,function(){
	console.log("THe Server is up now ha ha haaa...");
});


