var express = require('express');
var fs = require('fs');
var xml2js = require('xml2js');



var app = express();

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.contentType('text/xml');
    res.sendFile(__dirname + '/xml/nuestroxml.xml'); 
});
app.get('/mostrar.xsl', function (req, res) {
    res.contentType('text/xml');
    res.sendFile(__dirname + '/xml/mostrar.xsl'); 
});
app.get('/formulario.html', function (req, res) {
    res.set({ 'content-type': 'text/html; charset=utf-8'});
    res.sendFile(__dirname + '/public/formulario.html'); 
});





app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});