$(function() {
    'use strict';

    var proximosViajes = ['Londres', 'Valencia', 'Madrid', 'Paris', 'Milan'];

    console.log(proximosViajes);

    //Con el EACH trabaja Jquery para trabajar con arreglos o objetos- EACH itera como si fuera un for
    $.each(proximosViajes, function(i, v) {
        console.log(i); //Muestra los indices del arreglo
        console.log(v); //Muestra los valores del arreglo
        if (i == 0) {
            //Insertame en el aside, Proximos viajes
            $('aside').append('<h2>Próximos Viajes</h2>');
        }
        //En el aside, ingrese los valores (v) 
        $('aside').append('<li>' + v + '</li>');
    });

    //Creamos un objeto
    var viajesPorFecha = {
        primero: 'Londres',
        segundo: 'Valencia',
        tercero: 'Madrid',
        cuarto: 'Paris',
        quinto: 'Milan'
    };

    console.log(viajesPorFecha);

    //utlizamos el EACH para un objeto
    $.each(viajesPorFecha, function(i, v) {
        $('aside').append('<li>' + i + ' - ' + v + '</li>');
    });



});