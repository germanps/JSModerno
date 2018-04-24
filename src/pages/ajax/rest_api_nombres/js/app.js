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
   console.log(url);
   //Iniciar XMLHttpRequest
   const xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);
   xhr.onload = function(){
      if (this.status === 200) {
         const resultado = document.getElementById('resultado');
         const respuesta = JSON.parse(this.responseText);
         let htmlNombres = "<h2>Nombres Generados</h2>";
         htmlNombres += "<ul class='lista'>";

         //imprimir nombres
         respuesta.forEach(function (nombre) {
            htmlNombres += `<li>Nombre: ${nombre.name}`;
         });

         htmlNombres +="</ul>"
         resultado.innerHTML = htmlNombres;
         console.log(respuesta);
      }
   }
   xhr.send();
}