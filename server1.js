//Import a http module
var http = require("http");
//Import a file system
var fs = require("fs");
console.log("starting"); //print starting in console
//declare host and port
var host = "127.0.0.1";
var port = 1334;
//function to create server and passess request and response as a parameter
var server = http.createServer(function(request, response) {
    //print requested url in the console
    console.log("Requested request:" + request.url);
    //function to read file and give the response
    fs.readFile("./template" + request.url, function(error, data) {
        //if there is error then response is page not not found
        if (error) {
            response.writeHead(404, {
                "content-type": "text/plain"
            });
            response.end("sorry the page not found");
            //if there is no error then go to the html pages in the template folder
        } else {
            response.writeHead(200, {
                "content-type": "text/html"
            });
            response.end(data);
        }
    })
});
//listen the server using host and port
server.listen(port, host, function() {
    console.log("Listening:" + host + ":" + port);
});
