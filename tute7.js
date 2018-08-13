var express = require('express');
var app = express();

app.get("/", function(request,response){
	response.sendFile('home.html',{root:__dirname});
});

app.listen(3000,function(){
	console.log("server is up");
});

