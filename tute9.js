var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');


app.get("/", function(req,res){
    res.sendFile('home.html',{root:__dirname});
    res.send("my first name is : "+ JSON.stringify(req.query.fname)+"\n my surname is : "+JSON.stringify(req.query.lname));
});

app.listen(3000,function(){
	console.log("THe Server is up now ha ha haaa...");
});


