class Cliente {
   constructor(nombre,saldo){
      this.nombre = nombre;
      this.saldo = saldo;
   }

   imprimirSaldo(){
      return `Tu saldo es de: ${this.saldo}`
   }
   
   //Método Static(no hace falta instanciar para llamarlo)
   static bienvenida(){
      return `Bienvenido al cajero de Clientes`;
   }
}
const maria = new Cliente('Maria','Perez',10000);

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo){
        //Va hacia el constructor del que hereda
        super(nombre,saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }
     //Método Static(no hace falta instanciar para llamarlo)
   static bienvenida(){
    return `Bienvenido al cajero para Empresas`;
 }
}
const empresa1 = new Empresa('Empresa1', 10000, 938082058, 'Desarrollo web');
console.log(Empresa.bienvenida());
console.log(empresa1);
console.log(empresa1.imprimirSaldo());

const cliente1 = new Cliente('Germán', 5000);
console.log(Cliente.bienvenida());
console.log(cliente1);
console.log(cliente1.imprimirSaldo());