var express = require('express');
var app = express();
var handlebars = require('express-handlebars');
var mysql = require('mysql');

var con;

app.engine('handlebars',handlebars({defaultLayout:'main'})); 
app.set('view engine','handlebars');

app.get('/',function(request,response){
    con.query("SELECT * FROM  student",function(err,result){
        if(err) throw err;
        console.log(result);
        response.render('student',{
            result:result
        });
    });
});
app.listen(3000,function(){
    console.log("Server is up..!!");
    //making connection
    con  = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'test'
    });
});