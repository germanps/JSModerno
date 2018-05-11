const eventbrite = new EventBrite();
const ui = new Interfaz();

//Listener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e) => {
   e.preventDefault();
   const textoBuscador = document.getElementById('evento').value;
   const categorias = document.getElementById('listado-categorias');
   const catSeleccionada = categorias.options[categorias.selectedIndex].value;
   

   //control buscador
   if(textoBuscador !== ''){
      //hacer la mandanga
      eventbrite.obtenerEventos(textoBuscador, catSeleccionada)
         .then(data => {
            if (data.eventos.events.length > 0) {
                  //Retorna resultados
                  ui.mostrarEvento(data.eventos);
            }else{
                  ui.mostrarMensaje('No hay resultados', 'alert alert-danger mt-4');
            }
         });
   }else{
      //mostrar mensaje error
      ui.mostrarMensaje('El campo buscador es obligatorio', 'alert alert-danger mt-4');
   }
}, false);