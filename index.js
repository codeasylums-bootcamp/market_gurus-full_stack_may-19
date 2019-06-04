const express = require('express');
const morgan =require('morgan');
const parser = require('body-parser');
const mongoose =require('mongoose');

const app =express();

const port = 3006;

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb+srv://rgabhi:abhi1998@cluster0-f3ajx.mongodb.net/info?retryWrites=true",{ useNewUrlParser: true },function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Atlas Connected');
    }
});
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

const users = require('./routes/users');


// to handle cors error
app.use('*',function(req,res,next){
    res.set('Acess-Control-Allow-Origin','*');
    next();
});

app.use('/users',users);



app.listen(port,function(){
    console.log(`server listeninig on ${port}`);

});
