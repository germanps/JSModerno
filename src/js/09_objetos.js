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