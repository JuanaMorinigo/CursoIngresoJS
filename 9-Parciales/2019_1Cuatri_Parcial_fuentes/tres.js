/*Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final
 con descuento por id.*/
function mostrar()
{
    var precio;
    var porcentaje;
    var descuento;
    var precioFinal;

    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
    porcentaje = prompt("Ingrese el porcentaje de descuento");
    descuento = precio * porcentaje / 100;
    precioFinal = precio - descuento;
    document.getElementById("elPrecioFinal").value = precioFinal;
}
