console.log('Tipos de datos');
let valor;
valor = "Cadena";
valor = 20;
valor = true;
valor = null;
valor = undefined;
valor = false;
valor = {
   nombre: 'German',
}

console.log(valor.nombre);
console.log(typeof(valor));

//Symbol 
valor = Symbol('Simbolo');
console.log(typeof valor);

valor = [1,2,3];
console.log(typeof valor);

valor = new Date();
console.log(typeof valor);