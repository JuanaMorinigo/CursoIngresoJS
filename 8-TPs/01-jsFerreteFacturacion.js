/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var sumaPrecios;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;
    primerPrecio = parseInt(primerPrecio);
    segundoPrecio = parseInt(segundoPrecio);
    tercerPrecio = parseInt(tercerPrecio);
    sumaPrecios = primerPrecio + segundoPrecio + tercerPrecio;
    alert("La suma de los precios es: " + sumaPrecios);
}
function Promedio () 
{
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var promedioPrecios;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = document.getElementById("txtIdPrecioTres").value;
    primerPrecio = parseInt(primerPrecio);
    segundoPrecio = parseInt(segundoPrecio);
    tercerPrecio = parseInt(tercerPrecio);
    promedioPrecios = (primerPrecio + segundoPrecio + tercerPrecio) / 3;
    alert("El promedio de los precios es: " + promedioPrecios);	
}
function PrecioFinal () 
{
    var primerPrecio;
    var segundoPrecio;
    var tercerPrecio;
    var sumaPrecios;
    var precioIva;
    var precioFinal;

    primerPrecio = document.getElementById("txtIdPrecioUno").value;
    segundoPrecio = document.getElementById("txtIdPrecioDos").value;
    tercerPrecio = parseInt(document.getElementById("txtIdPrecioTres").value);
    sumaPrecios = primerPrecio + segundoPrecio + tercerPrecio;
    precioIva = sumaPrecios * 21 / 100;
    precioFinal = sumaPrecios + precioIva;
    alert("El precio con IVA incluido es: " + precioFinal);	
}