var express = require('express');
var app = express();
var port = Number(process.env.PORT || 3000);

var uuid = 0;

app.get('/', function(req, res){
	res.send("There is only one REST API GET call: /uuid");
});

app.get('/uuid', function(req, res){
	console.log('Got request for ' + uuid);
	uuid++;
	res.send("" + uuid);
});

var server = app.listen(port, function() {
	console.log('Listening on port %d', server.address().port);
});
