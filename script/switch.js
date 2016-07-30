function switchContent(opcion_seleccionada) { 
	
	var opciones_menu = 6;
	parrafo = document.getElementById("contenidos_" + opcion_seleccionada); 
	// liga = document.getElementById("enlace_" + numero); 

	var i = 0;
	for (i = 0; i < opciones_menu;i++)
	{
		if( i == opcion_seleccionada )
			document.getElementById("contenidos_" + i).style.display = "inline";
		else
			document.getElementById("contenidos_" + i).style.display = "none";
	}
	
}