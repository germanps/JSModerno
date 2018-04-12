//Con este ejemplo de objeto no podemos pasar argumentos
const cliente = {
   nombre: 'Germán',
   saldo: 1000,
   tipoCliente: function(){
      let tipo;
      if (this.saldo >= 1000) {
        tipo = 'Gold'; 
      }else if(this.saldo >= 500){
         tipo = 'Platinum';
      }else{
         tipo = 'Normal'
      }
      return tipo;
   }
}

//console.log(cliente.tipoCliente());

//Método alternativo (con function, pasamos argumentos)
function Cliente(nombre, saldo) {
   this.nombre = nombre;
   this.saldo = saldo;
   this.tipoCliente = function(){
      let tipo;
      if (this.saldo >= 10000) {
        tipo = 'Gold'; 
      }else if(this.saldo >= 5000){
         tipo = 'Platinum';
      }else{
         tipo = 'Normal'
      }
      return tipo;
   }
}
const persona1 = new Cliente('Pedro', 20000);
const persona2 = new Cliente('Marta', 7000);
console.log(persona1.nombre+" = "+persona1.tipoCliente());
console.log(persona2.nombre+" = "+persona2.tipoCliente());