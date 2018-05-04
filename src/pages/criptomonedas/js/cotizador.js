// Contendrá las consultas hacia la API
class Cotizador {

   //Obtiene las criptomones del JSON
   async obtenerMonedasApi(){
      //fetch a la api
      const url = await fetch('https://api.coinmarketcap.com/v2/ticker/');

      //respuesta de las monedas
      const monedas = await url.json();

      return{
         monedas
      }
   }
}