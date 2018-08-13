var mod = require('./Modules');
var http = require('http');

http.createServer(function (req,res){
	res.end("Hello Mana");
}).listen(8080);
console.log("server is listening");

console.log(mod.myvar);
mod.func1();
mod.func2();