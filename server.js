var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {

   displayForm(res);
});

function displayForm(res) {
    fs.readFile('formserver.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        
    });

}

server.listen(1185);
console.log("server listening on 1185");
