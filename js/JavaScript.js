function validarNombre(nombre){	
	if(nombre.length<4) {
		alert("El campo debe tener al menos 4 caracteres");
	}
}
		
function validarEmail(mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
	} else {
		alert("El email es incorrecto")
		return (false)
    }
}
			
function haCorrido() {
	if (document.getElementById("distancia")!=null){}
	else {
		var obj_distancia=document.createElement("input");
		obj_distancia.id="distancia";
		obj_distancia.type="number";
		document.getElementById("campo_corredor").appendChild(obj_distancia);
	}
}
			
function noHaCorrido() {
	if (document.getElementById("distancia")!=null) {
		document.getElementById("campo_corredor").removeChild(document.getElementById("distancia"));
	}
}
			
function indicarDatos() {
	var nombre=document.getElementById("nombre").value;
	var email=document.getElementById("email").value;
	var saludo="Te llamas "+nombre+" tienes email: "+email;
	var r_buttons=document.getElementsByName("hacorrido");
	var hacorrido=r_buttons[0].checked;
		if (hacorrido) {
			var distancia=document.getElementById("distancia").value;
			saludo=saludo+" y has corrido distancia de "+distancia+" km";
		}
	alert(saludo);
}
