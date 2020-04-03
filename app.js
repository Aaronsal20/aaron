const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route');


console.log('hi')
const app = express();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
    ) {
      cb(null. true);
    } else {
      cb(null. true);

    }
}

app.set('views',  '');
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '')));
app.use('/images', express.static(path.join(__dirname, 'images')));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(route);

module.exports = app;
