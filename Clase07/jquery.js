"use strict";
/// <reference path="./node_modules/@types/jquery/index.d.ts"/>
function MostrarMensaje() {
    var archivo = $("#archivos").prop("files");
    var mensaje = $("#mensaje").val();
    var formData = new FormData();
    formData.append("archivo", archivo[0]);
    formData.append("mensaje", mensaje);
    $("#divMensaje").html(mensaje);
    $.ajax({
        type: "POST",
        url: "./Backend/test.php",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        async: true
    })
        .done(function (obj) {
        if (!obj.foto.Exito) {
            console.clear();
            console.log(obj.foto.Mensaje);
            return;
        }
        $("#imagen").attr("src", obj.foto.PathTemporal);
        $("#divMensaje").html("Nombre de la imagen: " + obj.foto.NombreFoto + "<br>Mensaje: " + obj.mensaje);
        console.log(obj);
        alert("Exito");
    })
        .fail(function (obj) {
        alert("Error");
    });
}
//# sourceMappingURL=jquery.js.map