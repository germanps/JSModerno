/** STRINGS => NUMBERS **/
const num1 = "50",
      num2 = 10,
      num3 = 'tres';

console.log(num1 + num2);
console.log(Number(num1) + num2);
console.log(parseInt(num1) + num2);
console.log(typeof num3);

let dato;
dato = Number("20");
console.log(dato);
dato = Number('20.21324');
console.log(dato);
dato = Number(true);
console.log(dato);
dato = Number(false);
console.log(dato);
dato = Number(null);
console.log(dato);
dato = Number(undefined);
console.log(dato);
dato = Number("Hola mundo");
console.log(dato);
dato = Number([1,2,3]);
console.log(dato);

//ParseFloat y ParseInt
dato = parseInt('100');
console.log(dato);
dato = parseFloat('100');
console.log(dato);
dato = parseFloat("100.203");
console.log(dato);
dato = parseInt("100.203");
console.log(dato);

//toFix
dato = '16.543215';
console.log(parseFloat(dato).toFixed(2));
console.log(typeof dato);
dato = parseFloat(dato);
console.log(dato);

/** NUMBERS => STRINGS **/
let cp = 08293;
cp = String(cp);
console.log(cp.length);

let numero = '4' + '4';
console.log(numero.length);
let numero2 = 20;
console.log(numero2.toString());

/** A BOOLEANS **/
dato = true;
dato = String(dato);
console.log(dato);
console.log(typeof dato);
console.log(dato.length);//devuelve el lenght de 'true' => 4

/* ARRAY => STRING */
dato = [1,2,3];
console.log(dato);
console.log(typeof dato);
console.log(dato.length);