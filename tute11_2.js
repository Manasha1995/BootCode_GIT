var express= require('express');
var app = express();
var  bodyparser= require('body-parser');
var sessions = require('express-session');
var session; //create session variable to capture the session

app.use(bodyparser());
app.use(sessions({secret:'ffkgfkg4345%%5232'}));//use secret-key to encrypt the passed session

app.get('/',function(request,response){
    session=request.session;
    if(session.userid){
        response.send("Welcome admin");
    }else{
        response.sendFile('login.html',{root:__dirname});
    }
});
app.post('/login',function(request,response){
    if(request.body.uname=='admin' && request.body.pw=='admin'){
        session = request.session;//equal 2 objects
        session.userid = request.body.uname;//userid is an attribute of session object
        response.send("Welcome admin");
    }else{
        response.end("Invalid username or pw");
    }
});
app.listen(3000,function(){
    console.log("Server is up");
});