const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

dotenv.config({path : 'config.env'});
const PORT = process.env.PORT || 8080
//log requests
app.use(morgan("tiny"));

//parse request to body-parser

app.use(bodyparser.urlencoded({'extended':true}));

//set view engine 
app.set("view engine","ejs")
// inside a view folder to create new folder
// app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/add-user',(req,res)=>{
    res.render('add_user');
})

app.get('/update-user',(req,res)=>{
    res.render('update-user');
})

app.listen(PORT,()=>{ console.log("server is running on http://localhost")});