// Heredará los resultados, manejará todo lo que se vea en pantalla
class Interfaz {

   constructor(){
      this.init();
   }
   init(){
      this.construirSelect();
   }

   construirSelect(){
      cotizador.obtenerMonedasApi()
         .then(data => {
            console.log(data);
            //construir las options del select
         })
   }
}