function Validar() {
	var U, P;
	U=document.getElementById("Usu").value;
	P=document.getElementById("Pass").value;
	if (U=="Jaime"&&P=="JJRC9") {
		alert("Tu Usuario y Contraseña son Correctos");
		window.open("ht/pesogal.html");
		document.getElementById("Usu").value="";
		document.getElementById("Pass").value="";
	}
	else{
		alert("Usuario o Contraseña Incorrectos");
		document.getElementById("Usu").value="";
		document.getElementById("Pass").value="";
	}

}