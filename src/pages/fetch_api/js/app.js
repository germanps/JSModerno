
document.getElementById('txtBtn').addEventListener('click', cargarTxt, false);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON, false);
document.getElementById('apiBtn').addEventListener('click', cargarREST, false);


//Archivo TXT
function cargarTxt(){
  fetch('datos.txt')
  //El primer then redefinimos la conexion y como queremos traer los datos
    .then(function(response){
      return response.text();//como quieres los datos
    })
    .then(function(data){
      console.log(data);
      document.getElementById('resultado').innerHTML = data;
    })
    .catch(function(error){
      console.log(error);
    })
}


//Archivo JSON
function cargarJSON(){
  fetch('empleados.json')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      let html = '<ul>';
      data.forEach(function(el) {
        html += `<li>
                  <span>${el.nombre}: </span>
                  <span>${el.puesto}</span>
                </li>`;
      });
      html += '</ul>';
      document.getElementById('resultado').innerHTML = html;
    })
    .catch(function(error){
      console.log(error);
    })
}

function cargarREST () {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data)
      let html = '<ul>';
      data.forEach(function(imagen){
        html += `
          <li>
            <a href="${imagen.url}" target="blank" title="Album:${imagen.albumId} Imagen:${imagen.id}">
              <img src="${imagen.thumbnailUrl}">
            </a>
            <span>${imagen.title}</span>
          </li>
        `;
      })
      html += '</ul>';
      document.getElementById('resultado').innerHTML = html;
    })
    .catch(function(error){

    })
}