/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var primerNumero;
	var segundoNumero;
	var resultado; 
	primerNumero = document.getElementById("txtIdNumeroDividendo").value;
	primerNumero = parseInt(primerNumero);
	segundoNumero = document.getElementById("txtIdNumeroDivisor").value;
	segundoNumero = parseInt(segundoNumero);
	resultado = primerNumero % segundoNumero;
	alert("El resto es: " + resultado);
}