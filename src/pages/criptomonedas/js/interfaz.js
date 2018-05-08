// Heredará los resultados, manejará todo lo que se vea en pantalla
class Interfaz {

   constructor(){
      this.init();
   }
   init(){
      this.construirSelect();
   }

   construirSelect(){
      cotizador.obtenerMonedasApi('v1')
         .then(moneda => {
            const criptos = moneda.monedas;
            const combo = document.getElementById('criptomoneda');
            
            criptos.forEach(element => {
               const opt = document.createElement('option');
               opt.innerText = element.name;
               opt.value = element.name;
               combo.appendChild(opt);
            });
            
         });
         
         //construir las options del select 
   }
   mostrarMensaje(mensaje, clases){
      const div = document.createElement('div');
      div.className = clases;//agregamos las clases
      div.appendChild(document.createTextNode(mensaje));//agregameos el mensaje
      const mensajes = document.querySelector('.mensajes');
      mensajes.appendChild(div);
      setTimeout(() => {
            document.querySelector('.mensajes div').remove();
      }, 3000);
   }
}