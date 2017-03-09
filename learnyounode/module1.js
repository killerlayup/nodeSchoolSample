'use strict'

const fs = require('fs');
const path = require('path');


// con
module.exports = function(dir, extention, cb) {
    fs.readdir(dir, (err, files) => {
        if (err) return cb(err);
        var list = [];
        for (let file of files) {
            if (path.extname(file).replace('.', '') == extention) {
                // console.log(file.toString());
                list.push(file);
            }
        }
        cb(null, list);
    })
}