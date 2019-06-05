var express= require('express');
var app= express();
var mongoose= require('mongoose');
//var bodyParser= require('body-parser');

app.use(express.static(__dirname + '/all_merchants'));


app.get('/merchantlist',(req,res)=>{
    console.log('Recieved a GET request from a Merchant');
});


app.listen(3000);
 console.log(`server running on port ${3000}`);