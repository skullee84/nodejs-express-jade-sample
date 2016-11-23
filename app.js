var express = require('express');
var http    = require('http');
var path    = require('path');
// var stylus  = require('stylus');
// var nib     = require('nib');

// function compile(str, path) {
//   return stylus(str)
//     .set('filename', path)
//     .use(nib())
// }

var app = express();

app.set('port', 3000);
app.set('view engine', 'pug');

// app.use(stylus.middleware(
//   { src: __dirname + '/css'
//   , compile: compile
//   }
// ));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', function (req, res) {
  res.render('index', {
    title: 'Dia!',
    message: 'This is Pug.',
    names: [
      '1', '2', '3', '4', '5', '6', '7'
    ]
  })
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('server started.. port: ' + app.get('port'));
});
