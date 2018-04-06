//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');



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
   if(e.target.classList.contains('agregar-carrito')){
      const curso = e.target.parentElement.parentElement;
      leerDatosCurso(curso);
   }
}
//Lee los datos del curso
function leerDatosCurso (curso) {
   console.log(curso);
}