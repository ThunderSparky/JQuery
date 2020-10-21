// Cambiar CSS

$(function() {
    'use strict';

    //Para crear una animacion cuando le damos clip al logo
    $('.logo img').on('click', function() {
        //El metodo animate, hace que el logo img se anime a 200px en 1000 = 1 segundo
        $(this).animate({ 'width': '300px' }, 1000);
    });

    //Recordar que el mouseenter: es cuando le pasamos el mouse por encima
    $('main article img').on('mouseenter', aumentarImagen);
    //Para disminur la imagen cuando salimos de la imagen con el mouse
    $('main article img').on('mouseleave', disminuirImagen);

    function aumentarImagen() {
        $(this).animate({ 'width': '100%' });
    }

    function disminuirImagen() {
        $(this).animate({ 'width': '350px' });
    }

});