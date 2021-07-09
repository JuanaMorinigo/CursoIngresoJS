/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;
	primerNumero = document.getElementById("txtIdNumeroUno").value;
	primerNumero = parseInt(primerNumero);
	segundoNumero = document.getElementById("txtIdNumeroDos").value;
	segundoNumero = parseInt(segundoNumero);
	resultado = primerNumero + segundoNumero;
	alert("La suma de los números es igual a: " + resultado);
}

