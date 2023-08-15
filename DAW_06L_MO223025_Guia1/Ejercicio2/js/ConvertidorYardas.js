var metros  = prompt('Introduzca el valor en metros:','');
var yardas;

yardas = metros * 1.09361;
yardas = yardas.toFixed(4);

var resultado = document.getElementById('respuesta');
resultado.innerHTML = '<h3>El valor dado en metros es: '+metros+'</h3>';
resultado.innerHTML += '<h3>El valor de los metros en yardas es: '+yardas+'</h3>';
