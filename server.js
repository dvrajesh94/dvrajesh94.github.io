var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/bikes1', function(req, res , next){
  var bikes1 = [
    'my',
    'bikes',
    'are',
    'ready'
  ];
  res.send(bikes1);
});

app.listen(4000, function() {
  console.log("listening on port 4000!");
});