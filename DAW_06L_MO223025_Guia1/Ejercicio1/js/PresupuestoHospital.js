var presupuesto  = prompt('Introduzca el presupuesto: $','');
var dermatologia, traumatologia, pediatria, sobrante;

dermatologia = (presupuesto * 40) / 100;
traumatologia = (presupuesto * 30) / 100;
pediatria = (presupuesto * 25) / 100;
sobrante = (presupuesto * 5) / 100;

var resultado = document.getElementById('respuesta');
resultado.innerHTML = '<h2>Resultado del Presupuesto</h2>';
resultado.innerHTML += '<h3>Dermatologia: $' + dermatologia + '</h3>';
resultado.innerHTML += '<h3>Traumatologia: $' + traumatologia + '</h3>';
resultado.innerHTML += '<h3>Pediatria: $' + pediatria + '</h3>';
resultado.innerHTML += '<h4>5% sobrante: $'+sobrante+'</h4>';
