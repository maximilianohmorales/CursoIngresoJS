/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ;
	var descuento;
	var resultado;
importe = parseInt(document.getElementById('txtIdImporte').value);
descuento = parseFloat(importe * 25 / 100);
resultado = parseFloat(importe - descuento);
	document.getElementById('txtIdResultado').value = resultado;
}
