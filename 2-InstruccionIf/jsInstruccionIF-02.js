function mostrar()
{
	//Al ingresar una edad debemos informar solo si la persona es mayor de edad 
	var edad = document.getElementById("txtIdEdad").value; 
	if(edad >= 18){
		alert("Usted es mayor de edad");
	}	

}
//FIN DE LA FUNCIÓN