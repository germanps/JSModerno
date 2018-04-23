document.getElementById('cargar').addEventListener('click', cargarDatos, false);
const listado = document.getElementById('listado');

function cargarDatos(){
  //Crear objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();
  // Abrir conexxión
  xhr.open('GET', 'datos.txt', true);

  //Una vez que carga la página
  /* Con onload */
  /* xhr.onload = function(){
    // 200: correcto, 403:prohibido, 404: no encontrado
    if(this.status === 200){
      listado.innerHTML = this.responseText;
    }
  } */

    /* Con onreadystatechange */
    xhr.onreadystatechange = function () {
      /* 0 - No inicializado
         1 - Conexión establecida
         2 - Recibido
         3 - Procesando
         4 - Respuesta OK <=
      */
     console.log(`Estado: ${this.readyState}`)
     if (this.readyState === 4 && this.status === 200) {
      listado.innerHTML = this.responseText;
       console.log(this.responseText);
     }
    }

  //Enviar el request
  xhr.send();
}