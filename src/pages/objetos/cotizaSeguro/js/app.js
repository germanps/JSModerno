
//Rellenamos el select con los años de los vehículos
window.addEventListener('load', rellenaSelectAnios, false);
function rellenaSelectAnios(){
  const max = new Date().getFullYear();//año máximo (año actual)
  const min = max - 20 //hace 20 años
  const selectAnios = document.getElementById('anio');
  for (let i = max; i > min; i--) {
    let  option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
  }
}