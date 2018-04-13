//Object Create
const Cliente = {
   imprimirSaldo: function(){
      return `Hola ${this.nombre}, tu saldo es ${this.saldo}`
   },
   retirarSaldo: function(reintegro) {
      return this.saldo -= reintegro;
   }
}
const marta = Object.create(Cliente);
marta.nombre = 'Marta';
marta.saldo = 1000;

console.log(marta);
marta.retirarSaldo(300);
console.log(marta.imprimirSaldo());