//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
function mostrar()
{
	var numeroAleatorio;
	numeroAleatorio = parseInt(numeroAleatorio);
	numeroAleatorio = Math.floor(Math.random() * 10) + 1;
	alert("Su número es " + numeroAleatorio);
}
