class Interfaz{
    constructor() {
        //Instanciamos la api
        this.api = new Api();

        //Inicializar y obrtener la propiedad del mapa
        //this.latLng = {lat: 41.68, lng: 2};
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
                this.mostrarMapa(resultado);
            });
    }
    mostrarMapa(datos){
        // Almacena infoWindow Activo
        let infoWindowActivo;
        datos.forEach(dato => {
            // Destructuring
            let {
                adreca_nom,
                descripcio,
                imatge,
                horaris,
                localitzacio,
            } = dato;
            let municipio = dato.rel_municipis.municipi_nom;

            //crear objeto con latitud y longitud
            let coordenadas = localitzacio.split(',');
            let latLng = {
                lat: Number(coordenadas[0]),
                lng: Number(coordenadas[1])
            }
            //aseguramos que siempre venga un elemento con lat y lng
            if(latLng.lat == ''){
                return false;
            }else{
                console.log(latLng);
                //Creamos el marker de google
                let marker = new google.maps.Marker({
                    position: latLng,
                    map: this.mapa
                });

                //Crear el InfoWindow
                let infoWindow = this.crearInfoWindow(adreca_nom, descripcio, horaris, localitzacio);
                
                //Mostrar al hacer click
                marker.addListener('click', () => {
                    //cerrar infowindow activo
                    if (infoWindowActivo) {
                        infoWindowActivo.close();
                    }

                    infoWindow.open(this.mapa, marker);

                    //Asignarlo a Activo
                    infoWindowActivo = infoWindow;
                })
            }
        });
    }

    crearInfoWindow(adreca_nom, descripcio, horaris, localitzacio) {
        let contenido = `
                <div class="card-info">
                    <p>Lloc: <span>${adreca_nom}</span></p>
                    <p>Descripción: <span>${descripcio}</span></p>
                    <p>Horarios: <span>${horaris}</span></p>
                    <p>Localización: <span>${localitzacio}</span></p>
                </div>
                `
        let infoWindow = new google.maps.InfoWindow({
            content: contenido
        });
        return infoWindow;
    }
}