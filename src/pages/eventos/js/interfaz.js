class Interfaz {
    constructor(){
        //inicializa 
        this.init();
        //leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }
    //Metodo para cuando inicialice la app
    init(){
        //llamar a imprimircategorias
        this.imprimirCategorias();
    }
    imprimirCategorias(){
        const listaCategorias = eventbrite.obtenerCategorias()
            .then(categorias => {
                //Imprimimos las categorias en los options del select
                const cats = categorias.categorias.categories;
                const selectCat = document.getElementById('listado-categorias');
                cats.forEach(cat => {
                    const option = document.createElement('option');
                    option.value = cat.id;
                    option.appendChild(document.createTextNode(cat.name_localized));
                    selectCat.appendChild(option);
                });
            })
    }
}