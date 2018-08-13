//Advanced routing tutoral
var express = require('express');
var router = express.Router();
var app = express();

app.use('/firstroute',router);

router.get('/',function(request,response){
    response.send("This is firstroute root");
});

app.listen(3000, function(){
    console.log("server is up"); 
})

