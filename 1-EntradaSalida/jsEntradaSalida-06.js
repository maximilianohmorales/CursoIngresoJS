/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno txtIdNumeroDos

numeroUno  = parseInt(document.getElementById('txtIdNumeroUno').value);
numeroDos  = parseInt(document.getElementById('txtIdNumeroDos').value);
	alert(numeroUno  + numeroDos);
}

