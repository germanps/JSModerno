console.log('numbers');
const numero1 = 30,
      numero2 = 20,
      numero3 = 20.20,
      numero4 = .1020,
      numero5 = -3;
let resultado;

//Operaciones
resultado = numero1 + numero2;
console.log(resultado);
resultado = numero1 - numero2;
console.log(resultado);
resultado = numero1 * numero2;
console.log(resultado);
resultado = numero1 / numero2;
console.log(resultado);
resultado = numero1 % numero2;
console.log(resultado);
//PI
resultado = Math.PI;
console.log(resultado);
//Redondeo
resultado = Math.round(numero3);
console.log(resultado);
resultado = Math.ceil(numero3); //hacia arriba
console.log(resultado);
resultado = Math.floor(numero3); //hacia abajo
console.log(resultado);
//Raiz
resultado = Math.sqrt(numero2);
console.log(resultado);
//Absoluto
resultado = Math.abs(numero5);
console.log(resultado);
//Potencia
resultado = Math.pow(numero2, 3);
console.log(resultado);
//Numero Mínimo
resultado = Math.min(numero2, numero1, 34, 1);
console.log(resultado);
//Numero Maximo
resultado = Math.max(numero2, numero1, 34, 1);
console.log(resultado);
//Numero aleatorio
resultado = Math.floor(Math.random()*100);
console.log(resultado);

//Orden operaciones
resultado = (10 + 20 + 20 + 10 + 40) *.20;
console.log(resultado);

//Incrementar y decrementar
let puntuacion = 10;
console.log(++puntuacion);
console.log(--puntuacion);