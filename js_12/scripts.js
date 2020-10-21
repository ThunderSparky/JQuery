// Cambiar CSS

$(function() {
    'use strict';

    // Lo esconde dando clip al logo
    $('.logo img').click(function() {
        //slideUp: es una funcion que agrega un pequeña animacion, el parametro es cuanto quiero que dure 1000=1 segundo
        $('main article:first').slideUp(1000);
    });

    // lo muestra dandole clip al aside
    $('aside').click(function() {
        $('main article:first').slideDown(1000);
    });
});