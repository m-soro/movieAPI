var request = require('request');
var express = require('express')
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('search')
});

app.get('/results', function(req, res){
  var query = req.query.search;
  var url = `http://www.omdbapi.com/?s=${query}&apikey=57483d04`
  console.log(url);
  // using request in a route
  request(url, function(error, response, body) {
    if(!error && response.statusCode == 200){
      // JSON.parse(body) converts the APIs result to a Javascript object
      var parsedData = JSON.parse(body);
      res.render('results',{results: parsedData});
        }
    });
});

app.listen(3000, function(){
  console.log('Server has started');
});
