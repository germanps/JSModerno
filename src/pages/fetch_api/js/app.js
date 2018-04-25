
document.getElementById('txtBtn').addEventListener('click', cargarTxt, false);

function cargarTxt(){
  fetch('datos.txt')
    .then(function(response){
      return response.text();//como quieres los datos
    })
    .then(function(data){
      console.log(data);
      document.getElementById('resultado').innerHTML = data;
    })
    .catch(function(error){
      
    })
}