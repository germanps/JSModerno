//Instanciar ambas clases
const ui = new Interfaz();

//Mostrar sitios al cargar
document.addEventListener('DOMContentLoaded', () => {
   ui.mostrarSitiosInteres();
})

//Habilitar buscador
const buscador = document.querySelector('#buscar input');
//captar lo que escribimos en el input
buscador.addEventListener('input', () => {
   //si es mayor a 4 buscar sugerencias
   if (buscador.value.length > 3) {
      //Obtener sugerencias que sean partes de la búsqueda
      ui.obtenerSugerencias(buscador.value);
   }else{
      //Reiniciar mapa
      ui.inicializarMapa();
      //Mostrar lo pines
      ui.mostrarSitiosInteres();
   }
});