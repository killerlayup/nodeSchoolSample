var stream = require('stream');
var Stream = stream.Stream;

var ws = new Stream;
ws.writable = true;

ws.write = function(data) {
    console.log("input=" + data);
}

ws.end = function(data) {
    console.log("bye");
}

process.stdin.pipe(ws);