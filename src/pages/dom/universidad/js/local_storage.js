//Local Storage
//crear
localStorage.setItem('nombre', 'Germán');
//eliminar
//localStorage.removeItem('nombre');
//Obtener valor
const nombre = localStorage.getItem('nombre');
console.log(nombre);

//borrar el locarstorage
localStorage.clear();

//Session Storage (se borra al cerrar el navegador)
//sessionStorage.setItem('nombre', 'Germán');
