var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

app.get("/", function(req,res){
	res.sendFile('home.html',{root:__dirname});
});

app.get(/^(.+)/, function(req,res){
	try{
		if(fs.statSync(path.join(__dirname,'views',req.params[0]+'.html'))){
			res.sendFile(req.params[0]+'.html',{root:path.join(__dirname,'views')});
		}
	}
	catch(error){
			res.sendFile('404.html',{root:path.join(__dirname,'views')});
			console.log(error);	
	}
});

app.listen(3000,function(){
	console.log("THe Server is up now ha ha haaa...");
});


