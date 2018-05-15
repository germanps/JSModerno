//Maps(listas ordenadas)
let cliente = new Map();
cliente.set('nombre', 'german');
cliente.set('tipo', 'premium');
cliente.set('saldo', 3000);

console.log(cliente);

//Acceder a los valores
//console.log(cliente.get('nombre'));
//console.log(cliente.get('tipo'));
//console.log(cliente.get('saldo'));

//Métodos para los maps
//Tamaño
console.log(`Tamaño del Map: ${cliente.size}`);
//comprobar si un valor existe
console.log(cliente.has('nombre'));
console.log(cliente.has('apellido'));
//obtener elemento
console.log(cliente.get('saldo'));
//Borrar elemento
cliente.delete('saldo');
console.log(cliente);
//Limpiar el map
cliente.clear();
console.log(cliente);

//Agregar por default
const paciente = new Map(
   [
      ['nombre', 'paciente'],
      ['habitacion', 'N/D']
   ]
);

//Agregar un paciente
/* paciente.set('nombre','Antonio');
paciente.set('habitacion',400); */

//Agregar otro sin habitación(coge por defecto);
paciente.set('nombre','Germán');
console.log(paciente);

//recorrer por foreach
paciente.forEach((datos, index) => {
   console.log(`${index}: ${datos}`)
});
