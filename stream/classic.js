var Stream = require('stream');

var clssicStream = new Stream();
// clssicStream.readable = true;
var c = 64;
var i = 0;
var iv = setInterval(function() {
    if (++c >= 75) {
        clearInterval(iv);
        clssicStream.emit('end');
    } else clssicStream.emit('data', String.fromCharCode(c));
    console.log(i++);
}, 100);

clssicStream.pipe(process.stdout);