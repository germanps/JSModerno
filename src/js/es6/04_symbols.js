// Symbol (se consideran propiedadas privadas)
const simbolo = Symbol();
const simbolo2 = Symbol('Descripción aqui');

console.log(simbolo2);
console.log(Symbol() === Symbol());//Casa simbolo es diferente a otro

//ejemplo
let nombre = Symbol();
let apellido = Symbol();
let persona = {};
//agregar propiedad
persona.nombre = 'Germán';
persona.saldo = 500;
persona.tipo = 'Premiun';
//agregar symbol
persona[nombre] = 'German';
persona[apellido] = 'Pla';

console.log(persona);
//acceder a la propiedad
console.log(persona.nombre);
//acceder al symbol
console.log(persona[nombre]);

//Los sybols son propiedades privadas
for (const i in persona) {
   console.log(`${i} : ${persona[i]}`);
}