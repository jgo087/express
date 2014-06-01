/**********************************
  Middleware and bootstrap

  Sequence needs to be maintained
*********************************/

var fs = require('fs');
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');

var app = express();

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('tiny'));
app.use(bodyParser());
app.use(multer({
  dest: './public/media',
  limits: {
    fieldSize: '40mb' // for article wysiwyg
  },
  onFilesLimit: function() { console.log('Reached file size limit!'); },
  onFieldsLimit: function() { console.log('Reached field size limit!'); },
}));
app.use(cookieParser());
app.use(session({ secret: 'mMaCt-xxyUJ&p]@KtH#y' }));
app.use(express.static(path.join(__dirname, 'public')));


/**********************************
  Routes
*********************************/
require('./routes')(app);


// catch 404 and forward to error handler
// ( see config/error )
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

require('./config/error')(app);


module.exports = app;
