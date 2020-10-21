// Agregando o quitando

$(function() {
    'use strict';

    // obtener el valor del atributo href (devolverá la direccion a la cual te esta enviando el enlace [boton])
    jQuery('.navegacion ul li:first a').attr('href');

    // cambiar el valor
    jQuery('.navegacion ul li:first a').attr('href', 'http://udemy.com');

    //Le estamos agregando un nuevo atributo (target=_blank) y lo que hace el atributo es abrir el enlace en otra pagina
    jQuery('.navegacion ul li:first a').attr('target', '_blank');

    //Con esto estamos cambiamos de imagen
    //$('main article:first img').attr('src', 'img/imagen_2.jpg');

    //Cuando el usuario le de click a la imagen queremos que ejecute una funcion
    $('main article:first img').on('click', function() {
        $(this).attr('src', 'img/imagen_2.jpg');
    });

});