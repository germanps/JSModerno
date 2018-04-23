// Variables
const agregarPresupuesto = document.getElementById('agregarPresupuesto');
const formulario = document.getElementById('agregarGasto');
let presupuesto; //objeto que almacena el presupuesto(global)
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
    //inicializa el presupuesto
   insertarPresupuesto(cantidad){
      const presupuestoSpan = document.querySelector('#total');
      const restanteSpan = document.querySelector('#restante');

      //Insertar en el html
      presupuestoSpan.innerHTML = `${cantidad}`;
      restanteSpan.innerHTML = `${cantidad}`;
   }
   //imprime mensaje (tanto error como correcto)
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
   //inserta gastos en la lista
   agregarGastoListado(nombre, cantidad){
        const gastoListado = document.querySelector('#gastos ul');
        const liGasto = document.createElement('li');
        liGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
        //Insertat gasto
        liGasto.innerHTML = `
            ${nombre}
            <span class="badge badge-primary badge-pill">${cantidad}€</span>
        `;
        gastoListado.appendChild(liGasto);
   }
   // comprueba el presupuesto restante
   presupuestoRestante(cantidad){
       const restante = document.querySelector('#restante');
       //leemos el presupuesto restante
       const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
       //imprime en pantalla el restante
       restante.innerHTML = presupuestoRestanteUsuario;
       this.comprobarPresupuestoColor();
   }

   // Cambia de color el presupuesto restante
   comprobarPresupuestoColor(){
       const presupuestoTotal = cantidadPresupuesto.presupuesto;
       const presupuestoRestante = cantidadPresupuesto.restante;
       console.log(`${presupuestoTotal} => ${presupuestoRestante}`);

       //comprobar el 25% del gasto
       const restante = document.querySelector('.restante');
       if((presupuestoTotal / 4) > presupuestoRestante){
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
       }else if ((presupuestoTotal / 2) > presupuestoRestante) {
            //comprobar el 50% del gasto
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
       }
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
      //guardarPresupuestoLocalStorage(presupuesto)
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
      ui.imprimirMensaje('Correcto', 'correcto');
      ui.agregarGastoListado(gasto, cantidad);
      ui.presupuestoRestante(cantidad);
   }
}



/* Local Storage */
function guardarPresupuestoLocalStorage(presupuesto) {
    localStorage.setItem('presupuesto', JSON.stringify(cantidadPresupuesto));
}  