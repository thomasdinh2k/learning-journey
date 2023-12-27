const express = require("express");
const morgan = require("morgan");

const handlebars = require("express-handlebars");
const { engine, create, ExpressHandlebars } = require("express-handlebars");

const app = express();
const port = 3000;
const path = require('path');

// handlebars - Template engine
app.engine("handlebars", engine( {extname: '.hbs'} ));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, 'resources/views'));

// HTTP Logger
app.use(morgan('combined'));


app.get('/', (req, res) => {
    res.render('home');
})
app.get('/news', (req, res) => {
    res.render('news');
})


app.listen( port, () => {
    console.log(`Example app listening on port ${port}`);
});