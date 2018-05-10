class EventBrite {
    constructor(){
        this.tokeAuth = 'QJIV5YKOK23TSDY7YH5P';
        this.ordenar = 'date';
    }
    //Mostrar resultados de la búsqueda
    async obtenerEventos(evento, categoria){
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.tokeAuth}`);
        //esperar la respuesta y retornarlo como json
        const eventos = await respuestaEvento.json();
        return{eventos}
    }
    //Obtiene las categorias en init()
    async obtenerCategorias(){
        //consultar las categorias a la rest api(al ser await es una promise)
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.tokeAuth}`);
        //esperar respuesta y reotornar json
        const categorias = await respuestaCategorias.json();
        return{categorias}
    }
}