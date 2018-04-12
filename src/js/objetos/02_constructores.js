//String
const nombre1 = 'Pedro';
console.log(typeof nombre1 );
const nombre2 = new String('Pedro');
console.log(typeof nombre2);
console.log(nombre2);
if (nombre1 === nombre2) {
   console.log('Son iguales');
}else{
   console.log('No son iguales')
}

//Numbers
const numero1 = 20;
const numero2 = new Number(20);
console.log(numero1);
console.log(numero2);

//Booleans
const boolean1 = true;
const boolean2 = new Boolean(true);
console.log(boolean1);
console.log(boolean2);

//Funciones
const fun1 = function(a,b){
   return a+b;
}
const fun2 = new Function('a','b', 'return 1 + 2');
console.log(fun1(2,3));
console.log(fun2(1,2));

//Objetos
const persona1 = {
   nombre: "Germán"
}
const persona2 = new Object({nombre: 'Pedro'});
console.log(persona1);
console.log(persona2);

//Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr1);
console.log(arr2);