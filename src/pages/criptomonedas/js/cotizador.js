// Contendrá las consultas hacia la API
class Cotizador {

   //Obtiene las criptomones del JSON
   async obtenerMonedasApi(version){
      //fetch a la api
      let monedas;
      const urlV1 = await fetch('https://api.coinmarketcap.com/v1/ticker/');
      const urlV2 = await fetch('https://api.coinmarketcap.com/v2/ticker/');
      const urlV2List = await fetch('https://api.coinmarketcap.com/v2/listings/');

      //respuesta de las monedas
      const v1 = await urlV1.json();
      const v2 = await urlV2.json();


      

      if (version == 'v1') {
         monedas = v1;
      }else{
         /* let arrayCriptos = v2.data;
         console.log(arrayCriptos[2].name);*/
         monedas = v2; 
         let monedasV2 = [];
         const indices = Object.keys(monedas.data);        
         for (let i = 0; i < indices.length; i++) {
            const element = indices[i];
            monedasV2.push(v2.data[element]);
         }
         monedas = monedasV2;
      }

      return{ monedas }
   }


   //Prueba
   async convertirMoneda(currencyFrom, currencyTo)
   {
      //var cotizacionActual = obtenerMonedasApi('v2').find(x=>x.name == currencyFrom).USD.price;
      //return cotizacionActual * obtenerCambio('USD', currencyTo);
   }

}
