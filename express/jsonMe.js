var express = require('express');
var fs = require('fs');
var app = express();
var dir = process.argv[3];
app.get('/books', function(req, res) {
	fs.readFile(dir, function(err, file) {
		if (err) return res.sendStatus(500)
			// console.log(file);
		try {
			console.log(JSON.parse(file));
			res.send(JSON.parse(file));
		} catch (e) {
			res.sendStatus(500);
		}
	});
});

app.get('/search', function(req, res) {
	var query = req.query;
	console.log(query);
	res.send(query);
});


app.listen(process.argv[2]);