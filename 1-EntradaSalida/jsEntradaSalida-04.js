/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;
	nombreIngresado = prompt("Ingrese su nombre:");
	document.getElementById('txtIdNombre').value = ("Su nombre es: " + nombreIngresado);
}

