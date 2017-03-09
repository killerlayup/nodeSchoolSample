"use strict"

const fs = require('fs');
//获取第三个参数 
// node ***.js xxx  
// xxx 就是第三个参数
const path = process.argv[2];
// 同步读取 文件buffer
const buf = fs.readFileSync(path);
const content = buf.toString();

const items = content.split('\n');
// console.log(items);
console.log(items.length - 1);