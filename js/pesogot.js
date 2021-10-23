function SabertuPeso(){
	var N1, N2, Sa;
	N1=parseInt(document.getElementById("Num1").value);
	N2=parseInt(document.getElementById("Num2").value);
	Sa=(N1*N2)/9.8;
	document.getElementById("Sab").value=Sa;
}
function Borrar(){
	document.getElementById("Num1").value="";
	document.getElementById("Num2").value="";
	document.getElementById("Sab").value="";


}