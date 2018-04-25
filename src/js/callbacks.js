//callback en foreach 
const ciudades = ['Londres', 'New york', 'Barcelona', 'Paris', 'Roma'];

//inline callback (lo mas usado)
ciudades.forEach(function(ciudad) {
  console.log(ciudad);
});

//con función definida (no usado)
ciudades.forEach(callback);
function callback(ciudad){
  console.log(ciudad);
}

// Se agrega un nuevo pais despues de 2 segundos
function nuevoPais(pais, callback){
  setTimeout(function(){
    paises.push(pais);
    callback();
  }, 2000);
}

//Listado de paises (se muestran despues de 1 segundo)
const paises = ['Francia', 'Canadá', 'Italia', 'Portugal', 'México'];
function mostrarPaises() {
  setTimeout(function() {
    let html = '<ul>';
    paises.forEach(function(pais){
      html += `<li>${pais}</li>`;
    });
    html += '</ul>';
    document.getElementById('app').innerHTML = html;
  }, 1000);
}

// Agregar nuevo pais
nuevoPais('Alemania', mostrarPaises);                                                                                                                                                               

//Mostrar los paises
mostrarPaises();