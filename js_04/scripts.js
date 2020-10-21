// Agregando o quitando

$(function() {
    'use strict';
    //cuando le damos clip al logo imprima mensaje en consola
    $('.logo img').on('click', function() {
        console.log("has hecho click en el logo");
    });
    //cuando le damos clip al logo lo remueva
    $('.logo img').on('click', function() {
        $('.logo img').remove();
    });

    //El mouseenter es cuando el mouse se pone sobre el logo 
    $('.logo img').on('mouseenter', function() {
        console.log("sobre el logo");
    });

    //El mouseleave es cuando el mouse se pone fuera del logo
    $('.logo img').on('mouseleave', function() {
        console.log("fuera del logo");
    });

    //This: si yo le doy clip a la imagen, la imagen se convertiria en this
    $('.logo img').on('click', function() {
        $(this).remove(); //otra opcion seria $('.logo img')
    });

    //Muestra el elemento con id Menu
    $('#menu').on('click', function() {
        $('#navegacion').show();
    });

    //Esto es para cuando le damos clip sobre los enlaces "a" que esta en la barra del menu
    $('#navegacion ul li a').on('click', function(event) {
        event.preventDefault();
        console.log("has hecho click");
    });

});