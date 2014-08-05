var express = require('express');
var app = express();
var port = Number(process.env.PORT || 3000);
var mongo_uri = process.env.MONGOLAB_URI;

var MongoClient = require('mongodb').MongoClient;

function get_uuid(req, res, errCB, successCB) {
	MongoClient.connect(mongo_uri, function(err, db) {
		if (err) {
			if (errCB) errCB(err);
			return;
		}
		console.log('Update field in mongodb');
		var collection = db.collection('universe');
		collection.findAndModify( {}, {}, { $inc: { 'uuid': 1 } }, { upsert:true}, function(err, object) {
			if (err) {
				if (errCB) errCB(err);
				return;
			} else {
				if (!object) {
					if (errCB) errCB(err);
					return;
				}
				//console.log("Retrieved ",  object);
				//console.log('with uuid', object.uuid);
				if (successCB) successCB(res, object.uuid);
			}
		});
		return;
	});
}

function default_err(err) {
	console.warn('Oops, error: ' + err.message);
}

function send_uuid(res, uuid) {
	console.log("Send uuid " + uuid);
	res.send("" + uuid);
}

app.get('/', function(req, res){
	res.send("There is only one REST API GET call: /uuid");
});

app.get('/uuid', function(req, res){
	get_uuid(req, res, default_err, send_uuid);
});

var server = app.listen(port, function() {
	console.log('Listening on port %d', server.address().port);
});
