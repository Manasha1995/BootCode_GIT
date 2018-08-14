var express = require('express');
var app = express();
var mysql = require('mysql');

app.get('/',function(request,response){
    //making connection
    var con  = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'test'
    }); 
    con.query("SELECT * FROM  student",function(err,result){
        if(err) throw err;
        console.log(result);
    });
});


app.listen(3000,function(){
    console.log("Server is up..!!");
});