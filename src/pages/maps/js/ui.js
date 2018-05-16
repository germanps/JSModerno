class Interfaz{
    constructor() {
        //Inicializar y obrtener la propiedad del mapa
        let latLng = {lat: 41.68, lng: 2};
        this.mapa = new google.maps.Map(document.getElementById('mapa'), {
            center: latLng,
            zoom: 9
        });
    }
}