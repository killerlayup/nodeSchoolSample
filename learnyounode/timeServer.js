"use strict";
var net = require('net');
var port = process.argv[2];

var server = net.createServer(socket => {
    // socket handling logic

    // you can write data by this method, 
    // socket.write(data);

    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    if (month.toString().length < 2) {
        month = "0" + month;
    }
    if (day.toString().length < 2) {
        day = "0" + day;
    }
    var date = `${year}-${month}-${day} ${hour}:${minute}\n`;
    socket.end(date);
})

server.listen(port);