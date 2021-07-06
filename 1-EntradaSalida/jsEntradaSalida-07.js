/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
//txtIdNumeroUno


function sumar()
{	
numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
	alert(numeroUno + numeroDos);	
}

function restar()
{
numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
	alert(numeroUno - numeroDos);	
}

function multiplicar()
{ 
numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
	alert(numeroUno * numeroDos);	
}

function dividir()
{
numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
	alert(numeroUno / numeroDos);	
}

