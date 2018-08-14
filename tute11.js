var express= require('express');
var app = express();
var  bodyparser= require('body-parser');

app.use(bodyparser());

app.get('/',function(request,response){
    response.sendFile('login.html',{root:__dirname});
});
app.post('/login',function(request,response){
    if(request.body.uname=='admin' && request.body.pw=='admin'){
        response.send("Welcome admin");
    }else{
        response.end("Invalid username or pw");
    }
});
app.listen(3000,function(){
    console.log("Server is up");
});