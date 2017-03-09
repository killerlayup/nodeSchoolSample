var Readable = require('stream').Readable;

var rs = new Readable();
//在更多的情况下，我们想要的是当需要数据时数据才会产生，以此来避免大量的缓存数据。

//我们可以通过定义一个._read函数来实现按需推送数据:
// var c = 97;
// rs._read = function() {
//     //push 是不会 停止
//     rs.push(String.fromCharCode(c++));
//     if (c > 'z'.charCodeAt(0)) {
//         //停止readable stream
//         rs.push(null);
//     }
// }
// rs.pipe(process.stdout);

var c = 97 - 1;
var i = 0;

rs._read = function() {
    if (c >= 'z'.charCodeAt(0)) return rs.push(null);

    setTimeout(function() {
        rs.push(String.fromCharCode(++c));
        //push 一个 消费一个 
        console.log(i++);
    }, 100);
};

rs.pipe(process.stdout);

process.on('exit', function() {
    console.error('\n_read() called ' + (c - 97) + ' times');
});
process.stdout.on('error', process.exit);