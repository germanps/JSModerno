//Objeto base
const cliente1 = {
   nombre: 'Germán',
   tipo: 'Premium'
}
//Manera antigua
/* let nombre = cliente.nombre,
   tipo = cliente.tipo;
console.log(nombre);
console.log(tipo); */

//Asignación de valores con destructuring
/* nombre = 'Pedro';
tipo = 'Basico';
( {nombre, tipo} = cliente1 );
console.log(nombre);
console.log(tipo); */

//Acceder a un objeto dentro de un objeto
const cliente2 = {
   tipo: 'Premium',
   nombre: 'Valentino',
   datos: {
      ubicacion: {
         ciudad: 'Milan',
         pais: 'Italia'
      },
      cuenta: {
         desde: '10-12-2012',
         saldo: 4000
      }
   }
}
let {datos: {ubicacion} } = cliente2;
console.log(ubicacion);
console.log(ubicacion.ciudad);
console.log(ubicacion.pais);

let {datos: {cuenta} } = cliente2;
console.log(cuenta);
console.log(cuenta.desde);
console.log(cuenta.saldo);

//Valores por default
const cliente3 = {
   nombre: 'German',
   //tipo: 'Premium',
   saldo: 3000
}
let {nombre, tipo = 'Basico', saldo = 0} = cliente3;
console.log(nombre);
console.log(tipo);
console.log(saldo);