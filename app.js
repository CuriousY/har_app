const express = require('express')
      path = require('path')
      request = require('request')
      app = express();

const port = process.env.PORT || 8080;

let posts = require('./config.json').posts;
app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(request,response) => {
    response.render('home')
})

app.get('/about',(request,response) => {
    response.render('about')
})

app.get('/services',(request,response) => {
    response.render('services')
})

app.get('/contact',(request,response) => {
    response.render('contact')
})

app.get('/gallery',(request,response) => {
    response.render('gallery')
})



app.listen(port,() => {
    console.log('listening to 3000')
})
