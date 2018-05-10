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
      console.log(`${textoBuscador} => ${catSeleccionada}`);
   }else{
      console.log('error');
   }
}, false);