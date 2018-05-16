//crear
const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

let valor, expReg;

expReg = /[0-9]/;
valor = 1992;
console.log(expReg.test(valor));//comparar con expresion regular

//comparar una fecha
expReg = /\d\d-\d\d-\d\d\d\d/;
valor = '20-10-2018';
console.log(expReg.test(valor));//comparar con expresion regular

//compara una hora 
expReg = /\d\d:\d\d \D\D/;//Mayus busca caracteres que NO sean digitos
valor = '10:30 AM';

console.log(expReg.test(valor));


//Mas detalles
expReg = /\d+/;
valor = '10:30 AM';
console.log(expReg.test(valor));

//Negar la expresion
expReg = /[^0-9]/;
valor = 1992;
console.log(expReg.test(valor));

//Sintaxis con llaves
expReg = /\d{1,2}-\d{1,2}-\d{4}/;//rango de dígitos (desde hasta)
valor = '10-10-2018';
console.log(expReg.test(valor));

//Evaluar letras o números
expReg = /\w+/; //numeros o letras
valor = 'Mensaje de prueba';
console.log(expReg.test(valor));

//Evaluar solo números
expReg = /\d+/; //numeros
valor = 1234;
console.log(expReg.test(valor));

//Evaluar Mayusculas
expReg = /([A-Z])\w+/; //todas en letras mayusculas
valor = 'jM';
console.log(expReg.test(valor));

//Evaluar Minusculas
expReg = /([a-z])\w+/; //alguna en letras minusculas
valor = 'MM';
console.log(expReg.test(valor));