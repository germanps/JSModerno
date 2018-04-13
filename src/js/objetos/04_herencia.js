//Crear Objeto
function Cliente(nombre,saldo){
   this.nombre = nombre;
   this.saldo = saldo;
}

//Prototype que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
   return `Nombre: ${this.nombre}\nSaldo: ${this.saldo}`;
}

// Banca para empresas
function Empresa(nombre, saldo, telefono, tipo){
   Cliente.call(this, nombre, saldo);//herencia de Cliente
   this.telefono = telefono;
   this.tipo = tipo;

}
//Herencia del prototype
Empresa.prototype = Object.create(Cliente.prototype);

//Instancia de cliente
const cliente1 = new Cliente('Pedro', 1000);
console.log(cliente1);
console.log(cliente1.nombreClienteSaldo());

//Instanca de Empresa
const empresa1 = new Empresa('Udemy', 1000000, 5552188, 'Educacion');
console.log(empresa1);
console.log(empresa1.nombreClienteSaldo());