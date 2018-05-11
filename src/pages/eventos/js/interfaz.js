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
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases; 
        //agregamos el mensaje al div
        div.appendChild(document.createTextNode(mensaje));
        //buscar el padre
        const buscadorDiv = document.getElementById('buscador');
        buscadorDiv.appendChild(div);
        setTimeout(() => {
            this.limpiarMensaje();
        }, 2000);
    }
    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }
    mostrarEvento(data){
        const listaEventos = data.events;
        //recorrer el array eventos y crear su templateç
        console.log(listaEventos)
        this.limpiarResultadoEventos();
        listaEventos.forEach(evento => {
            this.listado.innerHTML +=   `
                <div class="col-md-4 mb-4>
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${evento.logo != null ? evento.logo.url : ''}">
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p calss="lead text-info">Información del evento</p>
                                <p>${evento.description.text.substring(0, 280)}...</p>
                                <span class="badge badge-primary">Capacidad del evento: ${evento.capacity}</span>
                                <span class="badge badge-secondary">Fecha del evento: ${evento.start.local}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar entradas</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        });
    }
    limpiarResultadoEventos(){
        this.listado.innerHTML = '';
    }
}