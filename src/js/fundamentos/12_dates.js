console.log('dates');
let valor;
//Objeto Date
const hoy = new Date();
valor = hoy;
console.log(valor);

//Fecha en específico
let navidad17 = new Date('12-25-2017');
valor = navidad17;
console.log(valor);

//mes
valor = hoy.getMonth();
console.log(valor);
//día
valor = hoy.getDate();
console.log(valor);
//dia de la semana
valor = hoy.getDay();
console.log(valor);
//año
valor = hoy.getFullYear();
console.log(valor);
//minutos
valor = hoy.getMinutes();
console.log(valor);
//hora
valor = hoy.getHours();
console.log(valor);
//milisegunos des el 1970
valor = hoy.getTime();
console.log(valor);

//Reescribir año
valor = hoy.setFullYear(2013);
valor = hoy.getFullYear();
console.log(valor);
