var express = require('express');
var app = express();

/* Workout */
app.use('/', express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("listen" + port);
});
