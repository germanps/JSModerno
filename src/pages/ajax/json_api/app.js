const cargarPosts = document.querySelector('#cargar');
cargarPosts.addEventListener('click', cargarApi, false);

function cargarApi() {
   
   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

   xhr.onload = function() {
      if (this.status === 200) {
         const result = document.getElementById('listado');
         const respuesta = JSON.parse(this.responseText);
         let contenido = '';
         respuesta.forEach(function(elemento) {
            contenido += `
                     <h3>${elemento.title}</h3>
                     <p>${elemento.body}</p>
                  `;
         });
         result.innerHTML = contenido;
      }
   }
   xhr.send();
}