/***** Clases ****/
// Cotizador 
function Seguro (marca, anio, tipo) {
  this.marca = marca;
  this.anio = anio;
  this.tipo = tipo;
}
//Prototype de la cotización
Seguro.prototype.cotizarSeguro = function(){
  /*
    1 = americano : 1.15
    2 = asiatico : 1.05
    3 = europeo : 1.35  
  */

  let cantidad;
  const base = 200;

  //logica para el tipo de coche
  switch (this.marca) {
    case '1':
      cantidad = base * 1.15;
      break;
    case '2':
      cantidad = base * 1.05;
      break;
    case '3':
      cantidad = base * 1.35;
      break;
  }
  console.log(cantidad);

  //leer el año del coche
  //diferencia de años
  const diferencia = new Date().getFullYear() - this.anio;

  //Cada año de diferencia hay que reducir un 3% del valor
  cantidad -= ((diferencia * 3 ) * cantidad) / 100;

  /*Si es basico se le añade el 30%
    Si es completo se le añade el 50%
  */
  if (this.tipo === 'basico') {
    cantidad *= 1.30;
  }else{
    cantidad *= 1.50;
  }
  console.log(cantidad);

}
// Todo lo que se muestra
function Interfaz(){} //Inicia vacio
// Prototypes
Interfaz.prototype.mostrarError = function(mensaje, tipo){
  const div = document.createElement('div');
  if (tipo === 'error') {
    div.classList.add('mensaje', 'error' , 'prueba');
  }else{
    div.classList.add('mensaje', 'correcto');
  }
  //agregamos el mensaje en el div
  div.innerHTML = `${mensaje}`;
  formulario.insertBefore(div, document.querySelector('.form-group'));

  //borrar mensaje
  setTimeout(function() {
    document.querySelector('.mensaje').remove();
  }, 2000);
}



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
    interfaz.mostrarError('Faltan datos', 'error');
  }else{
    // Interfaz: Imprime una vista correcta 
    const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
    //Prototype de cotizar un seguro
    const cotizacion = seguro.cotizarSeguro(seguro);
    interfaz.mostrarError('Datos correctos', 'correcto');
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