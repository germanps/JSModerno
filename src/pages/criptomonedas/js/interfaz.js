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

   //Imprime resultado de la cotización
   mostrarResultado(resultado, moneda){
      //Construir etiqueta segun la moneda
      const etiquetaMoneda =  `price_${moneda}`;
      //leer el valor del resultado
      const valor = resultado[etiquetaMoneda];
      let hora = new Date(resultado.last_updated * 1000);
      hora = `${hora.getHours()}:${hora.getMinutes()}h`;
      //Construir el template
      let templateHTML = '';
      templateHTML += `
                        <div class="card cyan darken-3">
                              <div class="card-content white-text">
                                    <span class="card-title">Resultado</span>
                                    <p>El precio de ${resultado.name} a ${moneda.toUpperCase()} es de: ${valor}</p>
                                    <p>Última hora: ${resultado.percent_change_1h}%</p>
                                    <p>Última día: ${resultado.percent_change_24h}%</p>
                                    <p>Últimos 7 días: ${resultado.percent_change_7d}%</p>
                                    <h5>Última actualización: ${hora}</h5>
                              </div>
                        </div>
                  `;
      document.querySelector('#resultado').innerHTML = templateHTML;
   }
}