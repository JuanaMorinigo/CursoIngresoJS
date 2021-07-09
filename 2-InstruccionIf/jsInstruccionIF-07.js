function mostrar()
{
	/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
	 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero*/ 
	
	 var edad = parseInt(document.getElementById("txtIdEdad").value); 
	 var estadoCivil = parseInt(document.getElementById("estadoCivil").value); 
	 if((edad < 18) && estadoCivil != "Soltero"){
		alert("Usted es muy pequeño para NO ser soltero");
	 }
	 else{
		 alert("Ah, mira vos");
	 }

}
//FIN DE LA FUNCIÓN