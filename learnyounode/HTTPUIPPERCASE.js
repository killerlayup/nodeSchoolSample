 var http = require('http')
 var map = require('through2-map')

 var server = http.createServer(function(req, res) {
     if (req.method !== 'POST') {
         return res.end('send me a POST\n')
     }

     req.pipe(map(function(chunk) {
         console.log(chunk + '1');
         return chunk.toString().toUpperCase()
     })).pipe(res)
 })

 server.listen(Number(process.argv[2]))