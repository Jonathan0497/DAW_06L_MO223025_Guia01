var celcius = prompt('Ingrese el valor en celcius a convertir a Fahrenheit: ');
var Fahrenheit;

Fahrenheit = celcius * 1.8;

var resultado = document.getElementById('respuesta');
resultado.innerHTML = '<h3>El resultado en Fahrenheit es: '+Fahrenheit+'</h3>';