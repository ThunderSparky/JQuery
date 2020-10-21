// Agregando o quitando

$(function() {
    'use strict';

    // Borrar Elemento
    //$('main article:first').remove();

    // ocultar elemento
    $('main article:first').hide();

    //clonar elemento y agregarlo al final
    var copia = $('main article:last').clone();
    //Lo clonaremos en el main
    $('main').append(copia); //Lo agrega al final

    // clonar elemento y agregarlo al inicio
    var copia = $('main article:last').clone();
    $('main').prepend(copia);

    // otra forma para colocarlo al final
    var copia = $('main article:last').clone();
    $(copia).prependTo('main');

    // segunda para colocarlo al principio
    var copia = $('main article:last').clone();
    $(copia).appendTo('main');
});