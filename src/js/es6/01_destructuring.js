//Objeto base
const cliente = {
   nombre: 'Germán',
   tipo: 'Premium'
}
//Manera antigua
/* let nombre = cliente.nombre,
   tipo = cliente.tipo;
console.log(nombre);
console.log(tipo); */

//Con destructuring
let {nombre, tipo} = cliente;
console.log(nombre);
console.log(tipo);
