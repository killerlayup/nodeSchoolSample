var http = require("http");
var fs = require("fs");
var path = process.argv[2];
var server = http.createServer(function(req, res) {
    var stream = fs.createReadStream(path);
    stream.pipe(res);
});