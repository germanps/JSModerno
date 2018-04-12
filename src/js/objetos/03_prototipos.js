//Crear Objeto
function Cliente(nombre,saldo){
   this.nombre = nombre;
   this.saldo = saldo;
}

//Crear un Prototype
Cliente.prototype.tipoCliente = function(){
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

//Prototype que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
   return `Nombre: ${this.nombre}\nSaldo: ${this.saldo}\nTipo cliente: ${this.tipoCliente()}`;
}

// Prototype prar retirar saldo
Cliente.prototype.retirarSaldo = function(reintegro) {
   return this.saldo -= reintegro;
}

const cliente1 = new Cliente('Pedro', 1000);

console.log(cliente1.saldo);
cliente1.retirarSaldo(300);


console.log(cliente1.tipoCliente());
console.log(cliente1.nombreClienteSaldo());
console.log(cliente1.saldo);