//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');

//Listeners
cargaEventListeners();
function cargaEventListeners(){
   // Dispara cuando se presiona 'Agregar Carrito'
   cursos.addEventListener('click', comprarCurso, false);
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
   console.log(curso);
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
   console.log(curso.imagen);
}