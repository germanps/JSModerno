class Interfaz {
    constructor(){
        //inicializa 
        this.init();
        //leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }
    //Metodo para cuando inicialice la app
    init(){

    }
    imprimirCategorias(){
        const listaCategorias = eventbrite.obtenerCategorias();
    }
}