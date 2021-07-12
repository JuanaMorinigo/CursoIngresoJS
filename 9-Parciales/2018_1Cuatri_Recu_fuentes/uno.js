/*Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre
 el perímetro por alert.*/
function mostrar()
{
    var anchoRectangulo;
    var largoRectangulo;
    var perimetroRectangulo;

    anchoRectangulo = prompt("Ingrese el ancho del rectángulo");
    anchoRectangulo = parseInt(anchoRectangulo);
    largoRectangulo = prompt("Ingrese la altura del rectángulo");
    largoRectangulo = parseInt(largoRectangulo);
    perimetroRectangulo = (2 * largoRectangulo) + (2 * anchoRectangulo);
    alert("El perímetro del rectángulo es: " + perimetroRectangulo);
}
