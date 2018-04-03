//EventListener click
/* document.querySelector('#submit-buscador').addEventListener('click', eventoclick, false);
function eventoclick(e) {
  e.preventDefault(); //no queremos que el evento haga su acción por default
  console.log('entra');
  let elemento;
  elemento = e.target;
  console.log(elemento);
}
document.querySelector('#encabezado').addEventListener('click',function(e){
  e.target.innerText = 'Nuevo encabezado por click';
}, false);
 */

/*
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const botonLogo = document.querySelector('#logo');

 botonLogo.addEventListener('click', obtenerEvento, false);
botonLogo.addEventListener('dblclick', obtenerEvento, false);
botonLogo.addEventListener('mouseenter', obtenerEvento, false);
botonLogo.addEventListener('mouseover', obtenerEvento, false);
botonLogo.addEventListener('mouseleave', obtenerEvento, false);
botonLogo.addEventListener('mouseout', obtenerEvento, false);
botonLogo.addEventListener('mousedown', obtenerEvento, false); 
botonLogo.addEventListener('mouseup', obtenerEvento, false);
botonLogo.addEventListener('mousemove', obtenerEvento, false);

function obtenerEvento(e){
  console.log(`Evento: ${e.type}`); //reporta el evento que se está usando
}*/

const busqueda = document.querySelector('#buscador');
/* busqueda.addEventListener('keyup', obtenerEvento, false);
busqueda.addEventListener('keypress', obtenerEvento, false);
busqueda.addEventListener('focus', obtenerEvento, false);
busqueda.addEventListener('blur', obtenerEvento, false);//quitar focus
busqueda.addEventListener('cut', obtenerEvento, false);//cortar texto
busqueda.addEventListener('copy', obtenerEvento, false);//copiar texto
busqueda.addEventListener('paste', obtenerEvento, false);//pegar texto */
busqueda.addEventListener('input', obtenerEvento, false);//relacionado a los anteriores
busqueda.addEventListener('chage', obtenerEvento, false);//cambiar foco


function obtenerEvento(e){
  //document.querySelector('#encabezado').innerText = busqueda.value;
  console.log(`Evento: ${e.type}`); //reporta el evento que se está usando
}

//Event BUBBLING (detener propagación)
/* const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e){
  console.log('click en card');
  e.stopPropagation();
});

infoCurso.addEventListener('click', function(e){
  console.log('click en infoCurso');
  e.stopPropagation();
});

agregarCarrito.addEventListener('click', function(e){
  console.log('click en agregarCarrito');
  e.stopPropagation();
}); */

//Delegation
document.body.addEventListener('click', eliminarElemento, false);
function eliminarElemento(e){
  e.preventDefault();
/*   console.log('click'); 
  console.log(e.target.classList); */

  if (e.target.classList.contains('borrar-curso')) {
    console.log('Contiene la clase'); 
    e.target.parentElement.parentElement.remove();
  }else{
    console.log('No contiene la clase'); 
  }
  if (e.target.classList.contains('agregar-carrito')) {
    console.log('Curso agregado'); 
  }
}