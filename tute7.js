var express = require('express');
var app = express();

app.use('/mycssfiles',express.static(__dirname+'/css'));

app.listen(3000,function(){
	console.log("THe Server is up now ha ha haaa...");
});
app.get("/", function(req,res){
	res.sendFile('home.html',{root:__dirname});
});


