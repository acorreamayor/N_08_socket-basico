var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conección con el servidor');
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});

socket.emit('enviarMensaje', {
    usuario: 'Alfonso',
    mensaje: 'Hola Mundo'
}, function(mensaje) {
    console.log('Se disparo el callback: ', mensaje);
});