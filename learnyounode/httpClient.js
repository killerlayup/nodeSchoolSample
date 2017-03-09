const http = require("http");
const url = process.argv[2];

http.get(url, res => {
    res.setEncoding('utf8');

    res.on('data', chunk => {
        console.log(chunk);
    })

    res.on('error', err => {
        console.log('problem with request: ' + err.message);
    })

    res.on('end', () => {
        // console.log('No more data in response.')
    })

})