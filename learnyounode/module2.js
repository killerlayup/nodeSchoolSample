var readDir = require('./module1');

const dir = process.argv[2];
const extention = process.argv[3];

readDir(dir, extention, (err, files) => {
    if (err) {
        return err;
    }
    // console.log(files);

    for (let file of files) {
        console.log(file);
    }

});