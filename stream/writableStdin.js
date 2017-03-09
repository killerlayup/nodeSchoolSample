// var Writable = require('stream').Writable;

// var ws = Writable();
var fs = require('fs')
var ws = fs.createWriteStream('./test.js');

// ws._write = function(chunk, enc, next) {
//     console.dir(chunk);
//     // console.log(chunk.readable());
//     next();
// };

process.stdin.pipe(ws);
// ws.push(null);