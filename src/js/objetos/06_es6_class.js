class Cliente {
   constructor(nombre,apellido,saldo){
      this.nombre = nombre;
      this.apellido = apellido;
      this.saldo = saldo;
   }

   imprimirSaldo(){
      return `Tu saldo es de: ${this.saldo}`
   }

   tipoCliente(){
      let tipo;
      if (this.saldo > 10000) {
         tipo = 'Gold';
      }else if (this.saldo > 5000) {
         tipo = 'Platinum';
      }else{
         tipo = 'Normal'
      }
      return tipo;
   }
   returarSaldo(reintegro){
      this.saldo -= reintegro;
   }
   
   //Método Static(no hace falta instanciar para llamarlo)
   static bienvenida(){
      return `Bienvenido al cajero`;
   }
}
const maria = new Cliente('Maria','Perez',10000);

console.log(maria);
maria.returarSaldo(300);

console.log(Cliente.bienvenida());
console.log(maria.imprimirSaldo());
console.log(maria.tipoCliente());


// Herencia

