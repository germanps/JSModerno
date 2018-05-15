const ciudades = ['Londres', 'New York', 'Barcelona', 'Milan'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();
datos.set('nombre', 'Germán');
datos.set('profesion', 'desarrollador web');

/* console.log(ciudades);
console.log(ordenes);
console.log(datos); */

// Entries iterator (retorna clave y valor)
/* for( let ciudad of ciudades.entries() ){
   console.log(ciudad);
}
for( let orden of ordenes.entries() ){
   console.log(orden);
}
for( let dato of datos.entries() ){
   console.log(dato);
} */


/* // Values iterator (retorna valor)
for( let ciudad of ciudades.values() ){
   console.log(ciudad);
}
for( let orden of ordenes.values() ){
   console.log(orden);
}
for( let dato of datos.values() ){
   console.log(dato);
} */

// Keys iterator (retorna clave)
/* for( let ciudad of ciudades.keys() ){
   console.log(ciudad);
}
for( let orden of ordenes.keys() ){
   console.log(orden);
}
for( let dato of datos.keys() ){
   console.log(dato);
} */

// Default iterator (cuando no le pasas el tipo de iterador que quieres)
for( let ciudad of ciudades ){
   console.log(ciudad);
}
for( let orden of ordenes ){
   console.log(orden);
}
for( let dato of datos ){
   console.log(dato);
}


//Iterador para string
const mensaje = 'Los iteradores de ES6';
for (let letra of mensaje){
   //console.log(letra);
}
const redes = document.querySelectorAll('.redes-item a');
let enlaces = [];
for (let red of redes) {
   enlaces.push(red.href);
}
console.log(enlaces);