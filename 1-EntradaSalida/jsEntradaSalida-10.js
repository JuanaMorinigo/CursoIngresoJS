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
	importe = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	descuento = importe * 25 / 100;
	importeConDescuento = importe - descuento;
	document.getElementById("txtIdResultado").value = importeConDescuento;	
}
