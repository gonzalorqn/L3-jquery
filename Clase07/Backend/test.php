<?php
require_once("./Archivo.php");

if(isset($_POST["mensaje"]))
{
    $obj = new stdClass();
    $obj->mensaje = $_POST["mensaje"];
    $obj->fecha = date("d-m-y h:i:s");
    $obj->foto = Archivo::Subir();
}
else
{
    $obj = null;
}

echo json_encode($obj);
