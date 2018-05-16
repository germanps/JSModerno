class Interfaz{
    constructor() {
        //Instanciamos la api
        this.api = new Api();

        //Inicializar y obrtener la propiedad del mapa
        this.latLng = {lat: 41.68, lng: 2};
        this.mapa = new google.maps.Map(document.getElementById('mapa'), {
            center: this.latLng,
            zoom: 9
        });
    }
    //Mostrar sitio de interes
    mostrarSitiosInteres(){

        this.api.obtenerDatos()
            .then(datos => {
                const resultado = datos.respuestaJSON.elements
                for (const dato of resultado) {
                    console.log(dato);
                }
            });
    }

}