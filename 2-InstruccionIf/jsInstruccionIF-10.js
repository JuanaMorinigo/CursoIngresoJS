/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
    var notaRandom;
	notaRandom=Math.floor(Math.random() * 10)+1;
	//Genero el número RANDOM entre 1 y 10 
	notaRandom=parseInt(notaRandom);

	if(notaRandom>8)
	{
		alert(notaRandom+ ": Excelente!!!");
	}
	else
	{
		if(notaRandom<4)
		{
			alert(notaRandom+ ": Vamos, la proxima se puede");
		}
		else
		{
			alert(notaRandom+": Aprobó");
		}
	}
}
