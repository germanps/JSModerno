// Variables
const agregarPresupuesto = document.getElementById('agregarPresupuesto');
const formulario = document.getElementById('agregarGasto');
let presupuesto;
let cantidadPresupuesto;
let gasto;

// Clases
class Presupuesto {
   constructor(presupuesto){
      this.presupuesto = Number(presupuesto);
      this.restante = Number(presupuesto);
   }
   //Método para restar del presupuesto
   presupuestoRestante(cantidad = 0){
      return this.restante -= Number(cantidad);
   }
}

// clase para controlar el html
class Interfaz {
   insertarPresupuesto(cantidad){
      const presupuestoSpan = document.querySelector('#total');
      const restanteSpan = document.querySelector('#restante');

      //Insertar en el html
      presupuestoSpan.innerHTML = `${cantidad}`;
      restanteSpan.innerHTML = `${cantidad}`;
   }
   imprimirMensaje(mensaje, tipo){
      const divMensaje = document.createElement('div');
      divMensaje.classList.add('text-center', 'alert');
      if (tipo === 'error') {
         divMensaje.classList.add('alert-danger');
      }else{
         divMensaje.classList.add('alert-success');
      }
      divMensaje.appendChild(document.createTextNode(mensaje));
      //Insertar en el DOM
      document.querySelector('.primario').insertBefore(divMensaje, formulario);

      //quitar alert despues de 3 secgundos
      setTimeout(function(){
         document.querySelector('.primario .alert').remove();
      }, 3000);
   }
}


// Listeners
agregarPresupuesto.addEventListener('click', creaPresupuesto, false);
formulario.addEventListener('submit', agregaGasto, false);



// Funciones
function creaPresupuesto (e) {
   //Pedimos el presupuesto
   presupuesto = prompt('Agrega tu presupuesto');
   //Hacemos las comprobaciones de lo que ingresa el usuario
   if(presupuesto === null || presupuesto === '' || !/^([0-9])*$/.test(presupuesto)){
      alert(`Este presupuesto es incorrecto: ${presupuesto}, prueba de nuevo`)
   }else{
      // Instanciamos un presupuesto
      cantidadPresupuesto = new Presupuesto(presupuesto);
      //Instanciamos la clase para la interfaz
      const ui = new Interfaz();
      ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
   }
    
}
function agregaGasto (e){
   e.preventDefault();
   //Leer del formulario de agregar gasto
   const gasto = document.getElementById('gasto').value;
   const cantidad = document.getElementById('cantidad').value;
   //Instanciar la interfaz
   const ui = new Interfaz();
   //Comprobar que los campos no esten vacios
   if (gasto === null || gasto === '' || cantidad === null || cantidad === '' ||  !/^([0-9])*$/.test(cantidad)) {
      // imprimir mensaje (dos parametros, tipo y mensaje)
      ui.imprimirMensaje('Hubo un error', 'error');
   }else{
      console.log('Datos correctos');
   }
}