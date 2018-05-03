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
   
   // Crear FETCH
   fetch(url)
      .then( response => response.json() )
      .then( data => {
         let html = "<h2>Nombres Generados</h2>";
         html += "<ul class='lista'>"
            data.forEach( nombre => {
               html += `
                     <li>${nombre.name}</li>
                  `;
            });

         html += "</ul>"
         document.querySelector('#resultado').innerHTML = html;
      })
      .catch( error => console.log(error) );
}