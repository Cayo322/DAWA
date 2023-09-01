 /*var http = require("http"),
  fs = require("fs");
var html = fs.readFileSync("./index.html");
http
  .createServer(function (solicitud, respuesta) {
    respuesta.write(html);
    respuesta.end();
  })
  .listen(9090);*/
  
  var http = require("http"),
    fs = require("fs");
  http
    .createServer(function (solicitud, respuesta) {
      fs.readFile("./index.html", function (error, html) {
        respuesta.write(html);
        respuesta.end();
      });
    })
    .listen(9090);