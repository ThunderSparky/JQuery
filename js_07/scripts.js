// Agregando o quitando

$(function() {
    'use strict';

    // en Consola
    $('.navegacion');
    //Muestra al hijo
    $('.navegacion').children();
    //Muestra al hijo del hijo
    $('.navegacion').children().children();
    //Ir al padre
    $('.navegacion').parent();
    //Brinca al siguiente elemento
    $('.navegacion').next();
    //Brinca al siguiente elemento del siguiente elemento
    $('.navegacion').next().next();

});