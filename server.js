const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database');

/**************** Middleware ******************/ 
app.use(logger('dev'));
app.use(express.json());

// app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

/**************** API Routes ******************/ 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/days', require('./routes/api/days'));
app.use('/api/youtube', require('./routes/api/videos'));

/**************** Catch All Route ******************/ 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});