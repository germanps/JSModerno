console.log('funciones');

//Function declaration
function saludar (nombre = 'Visitante') {//argumento por default
   return `Hola ${nombre}`;
}
console.log(saludar('Germán'));

function sumar (a,b){
   return a+b;
}
console.log(sumar(50,20));

let saludo = saludar();
console.log(saludo);

//Function expression
const suma = function(a = 3, b = 10) {
   return a + b;
}
console.log( suma(1,2) );
console.log( suma(5) );

//IIFE (autoejecutables)
(function(tecnologia){
   console.log('Creando función autoejecutable (IIFE)')
   console.log(`Aprendiendo ${tecnologia} moderno`);
})('Javascript');

//Métodos de propiedad 
const musica = {
   reproducir: function(id){
      console.log(`Reproduciendo Música con ID ${id}`);
   },
   pausar: function(){
      console.log(`Pausa la Música`);
   }
}
musica.reproducir(30);
musica.pausar();
//Los métodos de objetos tb pueden crearse fuera del objeto
musica.borrar = function(id) {
   console.log(`Borrando canción con el ID: ${id}`)
}

musica.borrar(20);