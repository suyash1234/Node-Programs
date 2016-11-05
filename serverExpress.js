var fs = require("fs");
console.log("starting");
var host = "127.0.0.1";
var port = 1339;
var express = require("express");
//console.log(express);
var app = express();
app.use(express.static('template'));
app.get('/', function(req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})
// This responds a POST request for the homepage
app.post('/', function(req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})
// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function(req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})
// This responds a GET request for the /list_user page.
app.get('/list_user', function(req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})
// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})
app.listen(port, host, function() {
    console.log("Listening is:" + host + ":" + port);
})
