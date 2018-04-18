console.log('es6');
/***** Clases ****/
// Cotizador 
class Seguro {
  constructor(marca, anio, tipo){
     this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
  }
  //Método de la cotización
  cotizarSeguro(){
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
    return(cantidad);
  
  }
}



// Todo lo que se muestra
class Interfaz{
  //Imprime mensaje
  mostrarMensaje(mensaje, tipo){
    const div = document.createElement('div');
    if (tipo === 'error') {
      div.classList.add('mensaje', 'error');
    }else{
      div.classList.add('mensaje', 'correcto');
    }
    //agregamos el mensaje en el div
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));
  
    //borrar mensaje
    setTimeout(function() {
      document.querySelector('.mensaje').remove();
    }, 3000);
  }

  //Imprime el resultado de la cotización
  mostrarResultado(seguro, total){
    const resultado  = document.getElementById('resultado');
    let marca;
    switch (seguro.marca) {
      case '1':
        marca = 'Americano'
        break;
      case '2':
        marca = 'Asiático'
        break;
      case '3':
        marca = 'Europeo'
        break;
    }
    const div = document.createElement('div');
    div.setAttribute('class', 'resumen');

    div.innerHTML = `<ul>
                        <li class='header'>Resumen del seguro</li>
                        <li>Marca: ${marca}</li>
                        <li>Año: ${seguro.anio}</li>
                        <li>Tipo: ${seguro.tipo}</li>
                        <li>Precio: ${total}</li>
                      </ul>
                    `;
    
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    setTimeout(function(){
      spinner.style.display = 'none';
      resultado.appendChild(div);
    }, 3000);
  }
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
    interfaz.mostrarMensaje('Faltan datos', 'error');
  }else{
    // Limpiar resultados anteriores
    const resultados = document.querySelector('.resumen');
    if(resultados != null){
      resultados.remove();
    }

    // Interfaz: Imprime una vista correcta 
    const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
    //Prototype de cotizar un seguro
    const cotizacion = seguro.cotizarSeguro(seguro);
    interfaz.mostrarResultado(seguro, cotizacion);
    interfaz.mostrarMensaje('Cotizando...', 'correcto');
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