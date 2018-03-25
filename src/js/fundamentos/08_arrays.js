//Creación de Arrays
const numeros = [10,20,30,40,50];
console.log(numeros);
const meses = new Array('Enero','Febrero','Marzo');
console.log(meses);
const mezcla = new Array(12,'Febrero', null, undefined, true);
console.log(mezcla);
//detectar si es un array
console.log(Array.isArray(meses));
//Agregar en posicion indicada
meses[3] = 'Abril';
console.log(meses);
//Agregar al final
meses.push('Mayo');
//Agregar al principio
meses.unshift('Los meses son: ');
console.log(meses);
//Eliminar del final
meses.pop();
console.log(meses);
//Eliminar del principio
meses.shift();
console.log(meses);
//Encontrar elemento
console.log(meses.indexOf('Abril'));//retorna la posicion si existe

//Eliminar de un sitio específico
meses.splice(2,1);
console.log(meses);

//Cambiar el orden
meses.reverse();
console.log(meses);

//Unir dos arrays
let array1 = [1,2,3];
let array2 = [4,5,6];
console.log(array1.concat(array2));
//Ordenar con letras
const frutas = ['Platano','Manzana','Fresa','Naranja'];
console.log(frutas);
console.log(frutas.sort());
//Ordenar con números
array1 = [32,1,54,6454,2,0,-8,13,91,92,7];
array1.sort();
console.log(array1);
array1.sort(function(a, b){
   return a - b;
});
console.log(array1);