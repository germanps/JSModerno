console.log('bucles 2');

//ForEach
const pendientes = ['Tareas','Comer','Proyecto','Aprender JS'];
console.log('*** CON FOREACH ***');
pendientes.forEach(function(pendiente, index) {
    console.log(`${index}: ${pendiente}`);
});

//ForIn
const coche = {
    modelo: 'Camaro',
    motor: 6.1,
    anyo: 1969,
    marca: 'Chevrolet'
}
console.log('*** CON FORIN ***');
for (const auto in coche) {
    console.log(`${auto}: ${coche[auto]}`)
}


//Map (recorrer un array de objetos);
const carrito = [
    {id:1, producto:'Libro'},
    {id:2, producto:'Piano'},
    {id:3, producto:'Disco'},
    {id:4, producto:'Colonia'},
    {id:5, producto:'Cartas de Magic'},
    {id:6, producto:'Fideos yakisoba'},
]
console.log('*** CON MAP ***');
const nombreProducto = carrito.map(function(carrito){
    return carrito.producto;
});
console.log(nombreProducto);