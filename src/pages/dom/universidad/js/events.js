console.log('listeners');
//EventListener click
document.querySelector('#submit-buscador').addEventListener('click', eventoclick, false);
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