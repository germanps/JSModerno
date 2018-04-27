//Normal Function
let normal;
normal = function(){
   console.log('Normal function');
}
normal();

//Arrow funciton
let arrow;
arrow = () => {
   console.log('Arrow function');
}
arrow();

//Arrow function en una linea (no requiere llaves)
let arrowEnLinea;
arrowEnLinea = () => console.log('Arrow en linea');
arrowEnLinea();

//Retornar valor sin return
let arrowReturn;
arrowReturn = () => 'Return sin return';
console.log( arrowReturn() );

//Retornar objeto
let arrowObject;
arrowObject = (tecno1, tecno2) => (
   {
      aprendiendo: 'Aprendiendo',
      tecnologia1: tecno1,
      tecnologia2: tecno2
   }
);
console.log(arrowObject('Javascript Morderno', 'ES6'));

//Pasar parámetro (uno solo)
let arrowObjectParam;
arrowObjectParam = tecno => console.log(`Aprendiendo ${tecno}`);
arrowObjectParam('ES7');


//Callback sin Arrow Function
const productos = ['Disco', 'Camisa', 'Guitarra'];
const letrasProductos = productos.map(function(producto){
   return producto.length;
});

console.log(letrasProductos);

//Callback con Arrow Function
const cosas = ['vaso', 'boligrafo', 'cable'];
const letrasCosas = cosas.map( cosa => cosa.length); //Return sin return

console.log(letrasCosas);

//Con ForEach
productos.forEach( producto => console.log(producto));