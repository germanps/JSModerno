class EventBrite {
    constructor(){
        this.tokeAuth = 'QJIV5YKOK23TSDY7YH5P';
        this.ordenar = 'date';
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