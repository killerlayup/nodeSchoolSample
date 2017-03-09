//可读数据流又分成两种，一种是 pull 模式，自己拉数据，就好像用吸管吸水，
//只有你吸了，水才会上来；另一种是 push 模式，数据自动推送给你，
//就好像水从水龙头自动涌出来。如果监听data事件，那么自动激活 push 模式；
//如果自己从数据流读取数据，那就是在使用 pull 模式。

var Readable = require('stream').Readable;
var util = require('util');

function MyObject(options) {
    if (!(this instanceof MyObject)) return new MyObject(options);
    if (!options) options = {};
    options.objectMode = true;
    Readable.call(this, options);
}
//继承
util.inherits(MyObject, Readable);

MyObject.prototype._read = function read() {
    var self = this;
    someMethodGetData(function(err, data) {
        if (err) self.emit('error', err);
        else self.push(data);
    });
};

var myObj = new MyObject();

myObj.on('data', function(data) {
    console.log(data);
});