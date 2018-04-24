const enviar = document.getElementById('generar-nombre');
enviar.addEventListener('submit', cargarNombres, false);

//Llamada ajax para imprimir resultados
function cargarNombres(e) {
   e.preventDefault();
   const origen = document.getElementById('origen');
   const origenSeleccionado = origen.options[origen.selectedIndex].value;

   const genero = document.getElementById('genero');
   const generoSeleccionado = genero.options[genero.selectedIndex].value;

   const cantidad = document.getElementById('numero').value;

   console.log(origenSeleccionado);
   console.log(generoSeleccionado);
   console.log(cantidad);
   
   let url = '';
   url += 'http://uinames.com/api/?';
   //Si hay origen concatenerlo a la url
   if (origenSeleccionado !== '') {
      url += `region=${origenSeleccionado}&`;
   }
   //Si hay genero concatenerlo a la url
   if (generoSeleccionado !== '') {
      url += `gender=${generoSeleccionado}&`;
   }
   //Si hay cantidad concatenerlo a la url
   if (cantidad !== '') {
      url += `amount=${cantidad}`;
   }
   console.log(url);
}