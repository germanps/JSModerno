console.log('funciones');

//Function declaration
function saludar (nombre = 'Visitante') {//argumento por default
   return `Hola ${nombre}`;
}
console.log(saludar('Germán'));

function sumar (a,b){
   return a+b;
}
console.log(sumar(50,20));

let saludo = saludar();
console.log(saludo);

//Function expression
const suma = function(a = 3, b = 10) {
   return a + b;
}
console.log( suma(1,2) );
console.log( suma(5) );