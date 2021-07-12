/*Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt
 y que muestre el perímetro por alert.*/
function mostrar()
{
    var lado;
    var perimetro;
    lado = prompt("Ingrese la medida de los lados del triángulo:");
    perimetro = 3 * lado;
    alert("El perímetro del triángulo es: " + perimetro);
}
