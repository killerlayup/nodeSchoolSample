var http = require('http');
var bl = require('bl')
var content = [];
var counter = 3;

for (var i = 0; i < 3; i++) {
    (function(index) {
        http.get(process.argv[index + 2], function(response) {
            response.pipe(bl(function(err, data) {
                if (err) throw err;

                content[index] = data.toString();
                counter--;
                if (counter === 0) {
                    console.log(content[0]);
                    console.log(content[1]);
                    console.log(content[2]);
                }
            }));
        });
    })(i);
}