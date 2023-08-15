var metros  = prompt('Introduzca el valor en metros:','');
var pies;

pies = metros / 0.3048;
pies = pies.toFixed(4);

var resultado = document.getElementById('resultado');
resultado.innerHTML = '<h3>El valor dado en metros es: '+metros+'</h3>';
resultado.innerHTML += '<h3>El valor de los metros en pies es: '+pies+'</h3>';
