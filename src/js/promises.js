// Promises

//resolve
const esperando = new Promise(function(resolve, reject){
  //resolve es cuando se cumple el Promise
  //reject es cuando no se cumple el Promise
  setTimeout(function() {
    resolve('Se ejecutó');
  }, 5000);
});

esperando.then(function(mensaje){
  console.log(mensaje);
});//se ejecuta el resolve()


//reject (simular un error)
const aplicarDescuento = new Promise(function(resolve, reject){
  const descuento = false;
  if(descuento){
    resolve('Descuento aplicado');
  }else{
    reject('Error aplicando el descuento');
  }
});

aplicarDescuento.then(function(resultado){
  console.log(resultado);
}).catch(function(error){
  console.log(error);
});
