var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

app.use(bodyparser.urlencoded({ 'extended': true }));

app.use(bodyparser.json())

mongoose.connect('mongodb://localhost:27017/pump-my-ride');

mongoose.connection.on('connected', function(){
	console.log('connected to dataBase mongodb @ localhost');
});

mongoose.connection.on('err', function(err){
	if(err){
		console.log('Error connecting to dataBase mongodb @ localhost', err);
	}
});

const route = require('./route');


app.use('/api', route);

app.use(express.static(path.join(__dirname, '/../public')));

/*console.log("__dirname", __dirname);*/
/*app.use(express.static('public'));*/
/*routes = require('./route.js')
app.use('/',routes);*/
app.get('/',function(req, res){
	res.send("rajesh.dv created route");
});
/*app.post('/')*/

app.listen(4000, function() {
  console.log("listening on port 4000!");
});
