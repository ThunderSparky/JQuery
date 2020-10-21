// Agregando o quitando

$(function() {
    'use strict';

    //Para seleccionar el elemento h2
    $('main article:first h2');

    // obtener el texto
    $('main article:first h2').text();

    // MODIFICANDO el Texto
    $('main article:first h2').text("Julinho");

    //Ahora estamos cambiando el h2 y el mensaje por lo que esta dentro del html( )
    $('main article:first h2').html('<h1>Hola Mundo</h1>');

    //obtiene el nombre del boton 
    $('.navegacion ul li:first a').text();

    //Cambia el nombre del primer boton y le coloca HOME
    $('.navegacion ul li:first a').text('Julinho Pe');

});