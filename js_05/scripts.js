// Agregando o quitando

$(function() {
    'use strict';

    /*
    //Para añadir una clase 
    jQuery('div.logo img').addClass('activo');
    */
    jQuery('.navegacion').show();
    jQuery('main article:first').addClass('activo');

    //Para cada uno de los enlaces
    $('.navegacion ul li a').on('click', function(e) {
        $('.navegacion ul li a').removeClass('activo'); //Esto funciona para que cuando demos clip a un boton este efecto se pierda y se vuelva agregar
        e.preventDefault(); //Lo que hace es que el enlace(boton) al que le demos clip no HAGA su funcion
        $(this).addClass('activo');
    });
});