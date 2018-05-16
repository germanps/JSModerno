class Api{
    async obtenerDatos(){
        //obtener desde la api
        const datos = await fetch('https://do.diba.cat/api/dataset/parcsequipaments_ca/format/json');

        //retornar una respuesta JSON
        const respuestaJSON = await datos.json();

        //retorna el objeto
        return{
            respuestaJSON
        }
    }
}