console.log('try catch');
// Funcion que no existe
try{
   algo();//no existe
}catch (error){
   console.log(error);
} finally{
   console.log('Siempre se ejecutará este código! haya error o no');
}

function obtenerClientes() {
   console.log('Descargando...')
   setTimeout(() => {
      console.log('Completado!');
   }, 3000);
}
obtenerClientes();