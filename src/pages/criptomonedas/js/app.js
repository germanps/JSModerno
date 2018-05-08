//Instanciar las clases

const cotizador = new Cotizador();
const ui = new Interfaz();

//Obtener el formulario
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
   e.preventDefault();

   const moneda = document.getElementById('moneda');
   const monedaSeleccionada = moneda.options[moneda.selectedIndex].value

   const criptomoneda = document.getElementById('criptomoneda');
   const criptomonedaSeleccionada = criptomoneda.options[criptomoneda.selectedIndex].value
   
   if (monedaSeleccionada === '' || criptomonedaSeleccionada === '') {
      // Alerta faltan datos
      ui.mostrarMensaje('Ambos campos son obligatorios', 'deep-orange darken-4 card-panel');
   }else{
      // Valores correctos (retorna una promesa)
      cotizador.obtenerValores(monedaSeleccionada, criptomonedaSeleccionada)
         .then(data => {
            ui.mostrarResultado(data.resultado[0], monedaSeleccionada.toLowerCase());
         })
   }
})