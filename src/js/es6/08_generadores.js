// Generadores (funcion que retorna un iterador)
/*function *crearGenerador(){
   // yield
   yield 1;
   yield 'Nombre';
   yield 3+3;
   yield true;
}

const iterador = crearGenerador();
 console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value); */


function *nuevoGenerador(carrito){
   for (let i = 0; i < carrito.length; i++) {
      yield carrito[i];      
   }
}

const carrito = ['Producto1', 'Producto2', 'Producto3', 'Producto4'];
let iterador = nuevoGenerador(carrito);
for (let i = 0; i < carrito.length; i++) {
   console.log(iterador.next().value);   
}
