/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{
	var importe;
	var descuento;
	var importeConDescuento;
	importe = prompt("Ingrese el importe:");
	importe = parseInt(sueldo);
	descuento = importe * 25 / 100;
	importeConDescuento = importe - descuento;
	alert("El importe final es: " + importeConDescuento);	
}
