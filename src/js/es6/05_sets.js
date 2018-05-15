let carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco1');
carrito.add('Disco2');
carrito.add('Disco3');
carrito.add('Disco3');//si dupicas un elemento el set no lo agrega

//console.log(carrito);
//console.log(carrito.size);
//Comprobar si existen valores
console.log(carrito.has('Camisa'));
console.log(carrito.has('Guitarras'));
//eliminar items
carrito.delete('Camisa');
console.log(carrito);
console.log(carrito.size);

//Vaciar el set totalmente
/* carrito.clear();
console.log(carrito);
console.log(carrito.size); */

//Recorrer set con foreach(la llave y el valor son iguales)
carrito.forEach((item, index) => {
   console.log(`${index}: ${item}`);
});

//Convertir un Set a Array
const arrayCarrito = [...carrito];
console.log(arrayCarrito);


/* let numeros = new Set([1,2,3,4,5,6,7,8,9,9,9]);
console.log(numeros);
console.log(numeros.size);
numeros.add(10);
console.log(numeros);
console.log(numeros.size); */

