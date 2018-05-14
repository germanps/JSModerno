// Imprimir valores desde funcion, forma anterior
/* function reserva (completo, opciones) {
   opciones = opciones || {};//si viene vacio le asignamos un objeto vacio

   let metodo = opciones.metodoPago,
       cantidad = opciones.cantidad,
       dias = opciones.dias;

   console.log(metodo)
   console.log(cantidad)
   console.log(dias)
}

reserva(
   true,
   {
      metodoPago: 'tarjeta',
      cantidad: 2000,
      dias: 3
   }
)
 */
// Imprimir valores desde funcion, Destructuring
/* function reserva (completo, opciones) {
   let {metodo, cantidad,dias} = opciones;
   if (completo) {
      console.log(metodo)
      console.log(cantidad)
      console.log(dias)
   }else{
      console.log('Fallo al realizar la reserva');
   }
   
}

reserva(
   true,
   {
      metodo: 'tarjeta',
      cantidad: 2000,
      dias: 3
   }
)
 */

 // Pasar valores por default con destructuring
function reserva (completo, {
         metodo = 'efectivo',
         cantidad = 0,
         dias = 0
      } = {} 
   ){

      if (completo) {
         console.log(metodo)
         console.log(cantidad)
         console.log(dias)
         console.log('Proceder a reservar...')
      }else{
         console.log('Fallo al realizar la reserva');
      }
}

reserva(
   false,
   {
      //metodo: 'tarjeta',
      //cantidad: 2000,
      //dias: 3
   }
)