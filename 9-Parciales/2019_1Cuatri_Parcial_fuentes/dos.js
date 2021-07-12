
/*A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx 
pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".*/
function mostrar()
{
    var nombreParejaUno;
    var nombreParejaDos;
    var pesoParejaUno;
    var pesoParejaDos;
    var pesoTotal;
    var pesoPromedio;

    nombreParejaUno = prompt("Ingresa tu nombre");
    pesoParejaUno = prompt("Ingresa tu peso");
    pesoParejaUno = parseInt(pesoParejaUno);
    nombreParejaDos = prompt("Ingresa tu nombre");
    pesoParejaDos = prompt("Ingresa tu peso");
    pesoParejaDos = parseInt(pesoParejaDos);

    pesoTotal = pesoParejaUno + pesoParejaDos;
    pesoPromedio = pesoTotal / 2;
    alert("Ustedes se llaman " + nombreParejaUno + " y " + nombreParejaDos + ", y pesan: " + pesoParejaUno + " y " + pesoParejaDos + " kg, que sumados son: " + pesoTotal + " kg. El promedio de peso es: " + pesoPromedio + " Kg.");
  
}
