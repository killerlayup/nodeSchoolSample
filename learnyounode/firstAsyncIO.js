'use strict'

const fs = require('fs');

const path = process.argv[2];
// 异步read file
const file = fs.readFile(path, (err, buf) => {
    if (err) {
        return console.log(err);
    }
    const content = buf.toString();
    const items = content.split('\n');
    console.log(items.length - 1);
});