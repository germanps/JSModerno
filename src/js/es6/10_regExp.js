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