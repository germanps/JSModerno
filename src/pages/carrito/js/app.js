//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//Listeners
cargaEventListeners();
function cargaEventListeners(){
   // Dispara cuando se presiona 'Agregar Carrito'
   cursos.addEventListener('click', comprarCurso, false);

   //Eliminar elementos del carrito
   carrito.addEventListener('click', eliminarCurso, false);

   //Vaciar carrito en su totalidad
   vaciarCarritoBtn.addEventListener('click', vaciarCarrito, false);

   //Al cargar el documento mostrar el local storage
   document.addEventListener('DOMContentLoaded', leerLocalStorage, false);
}


//Funciones
//Añade el curso al carrito
function comprarCurso(e){
   e.preventDefault();
   // Delegation para agregar-carrito
   if(e.target.classList.contains('agregar-carrito')){
      const curso = e.target.parentElement.parentElement;
      //Enviamos el curso seleccionado para obtener sus datos
      leerDatosCurso(curso);
   }
}
//Lee los datos del curso
function leerDatosCurso (curso) {
   //Crear objeto del curso
   const infoCurso = {
      imagen: curso.querySelector('img').src,
      titulo: curso.querySelector('h4').textContent,
      precio: curso.querySelector('.precio span').textContent,
      id: curso.querySelector('a').getAttribute('data-id')
   }
   insetarCarrito(infoCurso);
}

function insetarCarrito (curso) {
   const row = document.createElement('tr');
   row.innerHTML = `
      <td>
         <img src='${curso.imagen}'>
      </td>
      <td>${curso.titulo}</td>
      <td>${curso.precio}</td>
      <td>
         <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
      </td>
   `;
   listaCursos.appendChild(row);
   guardarCursoLocalStorage(curso);
}

//Eliminar el curso del carrito (DOM)
function eliminarCurso (e){
  e.preventDefault();
  let curso, cursoId;
  if(e.target.classList.contains('borrar-curso')){
    e.target.parentElement.parentElement.remove();
    curso = e.target.parentElement.parentElement;
    cursoId = curso.querySelector('a').getAttribute('data-id');
  }
  elimininarCusrsoLocalStorage(cursoId);
}

//Vaciar el carrito
function vaciarCarrito () {
  //Mientras en listaCursos haya un primer hijo, me lo eliminas
  while (listaCursos.firstChild) {
    listaCursos.removeChild(listaCursos.firstChild);    
  }

  //Vaciar local storage
  vaciarLocalStorage();

  return false;
}

//Guardar curso en el local storage
function guardarCursoLocalStorage (curso) {
  let cursos;
  //Obtenemos los cursos del local storage (si los hay, si no vendrá un array vacio)
  cursos = obtenereCursosLocalStorage();
  //agregamos el curso actual al array
  cursos.push(curso);

  localStorage.setItem('cursos', JSON.stringify(cursos));
  console.log(cursos);
}

//Obtener los cursos del local storage
function obtenereCursosLocalStorage () {
  let cursosLS;

  //Comprobamos si hay items en el local storage
  if(localStorage.getItem('cursos') === null) {
    //si no hay cursos en el LS inicias como array vacio
    cursosLS = [];
  }else{
    cursosLS = JSON.parse(localStorage.getItem('cursos'));
  }
  return cursosLS;
}

//Imprimir los cursos del local storage en el carrito
function leerLocalStorage () {
  let cursosLS;
  cursosLS = obtenereCursosLocalStorage();
  console.log(cursosLS);
  cursosLS.forEach(function (curso) {
    //construir el template
    const row = document.createElement('tr');
    row.innerHTML = `
       <td>
          <img src='${curso.imagen}'>
       </td>
       <td>${curso.titulo}</td>
       <td>${curso.precio}</td>
       <td>
          <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
       </td>
    `;
    listaCursos.appendChild(row);
  });
}

function elimininarCusrsoLocalStorage (curso) {
   let cursosLS;
   //Obtenemos el array del local storage
   cursosLS = obtenereCursosLocalStorage();
   //Comparamos el ID del curso que borramos con los del local storage
   cursosLS.forEach(function (cursoLS, index) {
      if (cursoLS.id === curso) {
         cursosLS.splice(index, 1);
      }
   });
   //Volvemos a agregar el array con los cambios al local storage
   localStorage.setItem('cursos', JSON.stringify(cursosLS));
   console.log(cursosLS);
}

//Vaciar el carrito del local storage(todos los cursos)
function vaciarLocalStorage () {
   localStorage.clear();
}