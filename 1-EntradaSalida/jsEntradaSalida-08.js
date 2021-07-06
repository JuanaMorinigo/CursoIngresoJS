/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var primerNumero = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	var segundoNumero = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	var resultado = primerNumero % segundoNumero;
	alert("El resto es: " + resultado);
}
