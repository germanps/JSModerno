// Variables
const agregarPresupuesto = document.getElementById('agregarPresupuesto');
let presupuesto;
let cantidadPresupuesto;

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
}


// Listeners
agregarPresupuesto.addEventListener('click', creaPresupuesto, false);




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