/***** Clases ****/
// Cotizador 
function Seguro (marca, anio, tipo) {
  this.marca = marca;
  this.anio = anio;
  this.tipo = tipo;
}
// Todo lo que se muestra
function Interfaz(){} //Inicia vacio


/***** Eventlisteners ****/
const formulario = document.getElementById('cotizar-seguro');
formulario.addEventListener('submit', enviaFormulario, false);
window.addEventListener('load', rellenaSelectAnios, false);





/**** Funciones ****/
// Envia el formulario
function enviaFormulario (e) {
  e.preventDefault();
  // Leer marca seleccionada del select
  const marca = document.getElementById('marca');
  const marcaSeleccionada = marca.options[marca.selectedIndex].value;
  // Leer el año seleccionado del select
  const anio = document.getElementById('anio');
  const anioSeleccionado = anio.options[anio.selectedIndex].value;

  // Lee el valor del radioButton
  const tipo = document.querySelector('input[name="tipo"]:checked').value;


  // Crear instancia de Interfaz
  const interfaz = new Interfaz();
  // Revisar que los campos no estén vacíos
  if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
    // Interfaz: Imprime un error
    console.log('faltan datos');
  }else{
    // Interfaz: Imprime una vista correcta 
    console.log('datos enviados!');
  }

}



//Rellenamos el select con los años de los vehículos
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