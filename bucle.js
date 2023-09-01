var http = require('http');

var manejador = function(solicitud, respuesta) {
    var i = 0;
    var intervalo = setInterval(function() {
        respuesta.write(i + '-->');
        i++;

        if (i > 10) {
            clearInterval(intervalo); // Detener el intervalo después de 10 iteraciones
            respuesta.end(); // Finalizar la respuesta
        }
    }, 500); 
};

var servidor = http.createServer(manejador);
servidor.listen(9090);
