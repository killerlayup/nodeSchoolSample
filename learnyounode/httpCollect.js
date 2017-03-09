'use strict';
const http = require('http');
const url = process.argv[2];
//把response对象当作一个只读数据流来访问响应体数据 
// htrtp res 是一个流 用chunk 表示
http.get(url, res => {
    res.setEncoding("UTF8");

    let data = '';
    res.on('data', chunk => {
        data += chunk;
    })

    res.on("error", err => {
        console.log('problem with request: ' + err.message);
    })

    res.on('end', () => {
        console.log(data.length);
        console.log(data);
    });
});