//Advanced routing tutoral
var express = require('express');
var router = express.Router();
var app = express();

app.use('/firstroute',router);

router.get('/',function(request,response){
    response.send("This is firstroute root");
});

router.get('/route1',function(request,response){
    response.send("This is firstroute route1");
});

router.get('/route2',function(request,response){
    response.send("This is firstroute route2");
});

app.listen(3000, function(){
    console.log("server is up"); 
});