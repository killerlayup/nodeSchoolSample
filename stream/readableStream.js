var fs = require('fs');
var readableStream = fs.createReadStream('./meetpipe.js');
var writableStream = fs.createWriteStream('./writable.js');
var data = '';
var chunk;

readableStream.setEncoding('utf8');

// readableStream.on('readable', function() {
//     while ((chunk = readableStream.read()) !== null) {
//         data += chunk;
//     }
// });

//pipe()
//pipe方法是自动传送数据的机制，就像管道一样。它从“可读数据流”读出所有数据
//，将其写出指定的目的地。整个过程是自动的。
//pipe必须在可读数据流上调用 参数必须是可写数据流
//readable.pipe(writableStream)
//可以使用链式写法 a.pipe(b).pipe(c) ==> a.pipe(b) b.pipe(c)
//来源地的数据流读取完成，默认会调用目的地的end方法，就不再能够写入。
//对pipe方法传入第二个参数{ end: false }，可以让目的地的数据流保持打开。
//unpipe移除
readableStream.pipe(writableStream, { end: false });
readableStream.on('data', function(chunk) {
    console.log(chunk);
    console.log('读取%d字节的数据', chunk.length);
    readableStream.pause();
    console.log('接下来的1秒内不读取数据');
    setTimeout(function() {
        console.log('数据恢复读取');
        readableStream.resume();
    }, 1000);
});
//
readableStream.on('end', function() {
    console.log("dataend")
});


//s是一个readable数据流
// s.on('data', f); // 收到新的数据时，data事件就会发生，触发f()
// s.on('end', f); // 数据读取完以后，不会再收到数据了，end事件发生，触发f()
// s.on('error', f); // 发生错误时，error事件发生，触发f()
// s.readable // => true if it is a readable stream that is still open
// s.pause(); // Pause "data" events.  For throttling uploads, e.g.
// s.resume(); // Resume again

// （
// 1） readable

// readable事件在数据流能够向外提供数据时触发。 


// var readable = getReadableStreamSomehow();
// readable.on('readable', function() {})