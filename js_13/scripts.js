// Ajax

$(function() {
    'use strict';

    //Cuando le demos clip debe ejecutar la funcion cargaAjax
    $('.logo img').on('click', cargarAjax);

    //Creamos la funcion cargarAjax
    function cargarAjax() {
        $.ajax("js_13/lenguajes.txt", {
            success: agregarContenido,
            type: "GET",
            dataType: 'text'
        });
    }

    //Creamos la funcion agregarContenido ya que la utilizamos dentro del cargarAjax
    function agregarContenido(data, status, jqxhr) {
        //Donde queremos mandar estos datos que vienen de js_13/lenguajes.txt ? => en el aside
        $('aside').text(data);
        //Esto es para ver el estado
        console.log(status);
    }

    //Esto es otra forma utilizando LOAD (permite cargar distintos archivos HTML en nuestro aside)
    $('aside.sidebar').load('js_13/promo.html');

});