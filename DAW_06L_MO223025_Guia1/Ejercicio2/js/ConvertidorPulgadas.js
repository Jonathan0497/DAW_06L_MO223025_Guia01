var metros  = prompt('Introduzca el valor en metros:','');
var pulgadas;

pulgadas = metros * 39.370;
pulgadas = pulgadas.toFixed(4);

var resultado = document.getElementById('resultado');
resultado.innerHTML = '<h3>El valor dado en metros es: '+metros+'</h3>';
resultado.innerHTML += '<h3>El valor de los metros en pulgadas es: '+pulgadas+'</h3>';
