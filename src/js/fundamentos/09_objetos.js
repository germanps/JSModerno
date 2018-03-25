console.log('objetos');
//Crear Objetos
const persona = {
   nombre: 'Germán',
   apellido: 'Pla',
   edad: 42,
   profesion: 'Developer',
   email: 'germanps@outlook.es',
   musica: ['Rock','Metal','Trash'],
   hogar: {
      ciudad: 'Barcelona',
      pais: 'España'
   },
   nacimiento: function() {
      return new Date().getFullYear() - this.edad;
   }
}
persona.musica.push('Power metal');
console.log(persona);
console.log(persona.musica);
console.log(persona.hogar.ciudad);
console.log(persona.nacimiento());

//Array de Objetos
const coches =  [
   {modelo: 'Mustang', motor: 6.1},
   {modelo: 'Camaro', motor: 6.5},
   {modelo: 'Challenger', motor: 6.3}
]
coches[0].modelo = 'Audi';

for (let i = 0; i < coches.length; i++) {
   console.log(`Modelo: ${coches[i].modelo} # Motor: ${coches[i].motor}`);
}