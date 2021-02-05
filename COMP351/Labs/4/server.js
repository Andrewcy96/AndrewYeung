let http = require('http')
let url = require('url')
let date = require('./module')

http.createServer(function(req,res)
{
    let q = url.parse(req.url, true)
    console.log(q.query)
    res.writeHead(200,{"Content-Type": "text/html"})
    res.end('Hello ' + q.query["name"]+ " the time is: " + date.time());

}).listen(8080);

//server.listen