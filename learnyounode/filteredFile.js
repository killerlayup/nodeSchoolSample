'use strict'

const fs = require('fs');
const path = require('path');


const backsuffix = process.argv[3];
const dirPath = process.argv[2];

fs.readdir(dirPath, (err, files) => {
    if (err) return console.error(err)
    for (let file of files) {
        if (path.extname(file).replace('.', '') == backsuffix) {
            console.log(file.toString());
        }
    }
})