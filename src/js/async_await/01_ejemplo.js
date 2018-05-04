// Asyn await
async function obtenerClientes() {
   //Siempre va a requerir un promise
   const clientes = new Promise((resolve, reject) => {
      //Simular carga de un servidor
      setTimeout( () => {
         //Cuando resuelva
         resolve('Clientes descargados!');
      }, 2000)
   })
   //Error o no..
   const error = false;
   if (!error) {
      //El await espera hasta que la promise haya filanizado
      const respuesta = await clientes;
      return respuesta;
   }else{
      //aqui ya no esta disponible el reject
      await Promise.reject(`Hubo un error...`);
   }
}

obtenerClientes()
   .then(res => console.log(res))
   .catch(error => console.log(error));

// Async await con fetch api
async function leerToDos(){
   //esperar respuesta
   const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

   // Procede cuando esté la respuesta ok
   const datos = await respuesta.json();
   return datos;
}
leerToDos()
   .then( usuarios => console.log(usuarios));