/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
	var ancho;
	var alambre;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);
    ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);
    alambre = (ancho + ancho + largo + largo) * 3
	alert("Se deben comprar " + alambre + " metros de alambre");
}
function Circulo () 
{
    var radio;
	var terreno;
	var resultado;

	radio = document.getElementById('txtIdRadio').value;
	radio = parseInt(radio);
	terreno = (2 * 3.14) * radio;
	resultado = terreno * 3;
	alert("La cantidad de metros de alambre que se debe comprar es: "+ resultado + " metros");	
}
function Materiales () 
{
    var largo;
	var ancho;
	var terreno;
	var cemento;
	var cal;

	largo = document.getElementById('txtIdLargo').value;
	largo = parseInt(largo);

	ancho = document.getElementById('txtIdAncho').value;
	ancho = parseInt(ancho);
	terreno = largo * ancho;

	cemento = terreno * 2;
	cal = terreno * 3;
	alert("Se necesitarán " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");	
}