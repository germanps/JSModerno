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
      console.log(cantidadPresupuesto);
   }
    
}