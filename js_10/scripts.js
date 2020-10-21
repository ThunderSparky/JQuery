// Cambiar CSS

$(function() {
    'use strict';

    // cambiando los efectos de CSS en este caso el width 
    $('.logo img').css({ 'width': '400px' });

    //Cambiando el color de nuestros h2
    $('main article h2').css({ 'color': '#db008d' });

    //Para cambiar 3 efectos del atributo aside
    $('aside').css({
        'background-color': '#e1e1e1',
        'text-transform': 'uppercase',
        'padding': '20px'
    });

    //Para cambiar el color de la barra de menu cuando el mouse esta adentro
    $('.navegacion ul li a').on('mouseenter', cambiarColor);

    //Creamos esta funcion que será llamada en el ON.(mouseenter, CAMBIARCOLOR) de arriba
    function cambiarColor() {
        $('.navegacion').css('background-color', 'red');
    }
});