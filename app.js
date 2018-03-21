const express = require('express')
      path = require('path')
      request = require('request')
      app = express(),
      commonJSON = require('./config/common.json');

const port = process.env.PORT || 8080;

let posts = require('./config.json').posts;
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(request,response) => {
    response.render('home',{commonObj:commonJSON})
})

app.get('/about',(request,response) => {
    response.render('about',{commonObj:commonJSON})
})

app.get('/services',(request,response) => {
    response.render('services',{commonObj:commonJSON})
})

app.get('/contact',(request,response) => {
    response.render('contact',{commonObj:commonJSON})
})

app.get('/gallery',(request,response) => {
    response.render('gallery',{commonObj:commonJSON})
})

app.get('*',(request,response) => {
    response.render('home',{commonObj:commonJSON})
})

app.listen(port,() => {
    console.log(`listening on ${port}`);
})
