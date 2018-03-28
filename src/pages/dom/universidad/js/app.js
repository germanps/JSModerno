/* // Eliminar de Local Storage
localStorage.clear();
let elemento;
elemento = document;
elemento = document.all[10];
console.log(elemento);
elemento = document.domain;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
console.log(elemento);
elemento = document.forms[0].id;
console.log(elemento);
elemento = document.forms[0];
console.log(elemento.classList);
elemento = document.images;
console.log(elemento);
elemento = document.images[2].src;
console.log(elemento);
elemento = document.images[2].getAttribute('src');
console.log(elemento);

//Scripts
elemento = document.scripts;
console.log(elemento);

//Ejercicio
let imagenes = document.images;
let imagenesArray = Array.from(imagenes);

console.log(imagenes);
console.log(imagenesArray);

imagenesArray.forEach(function(imagen){
    console.log(imagen);
}); */

//getElementoById
/* let encabezado;
encabezado = document.getElementById('encabezado').innerText;
console.log(encabezado);

//querySelector
const encabezado2 = document.querySelector('#encabezado');
console.log(encabezado2);
//querySelectorAll
const enlaces = document.querySelectorAll('.enlace');
enlaces.forEach(element => {
    console.log(element);
});
let primerEnlace = document.querySelector('#principal .enlace:first-child');
console.log(primerEnlace);
console.log(`El primer enlace: ${primerEnlace}`); */

//getElementsByClassName
/* let masenlaces = document.getElementsByClassName('enlace');
console.log(masenlaces); */

//Hybrid queryselector && by className
/* const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
console.log(listaEnlaces); */

//Convertir tags en un array y recorrerlo
/* const links = document.getElementsByTagName('a');
let enlaces = Array.from(links);
enlaces.forEach(function(enlace) {
    console.log(enlace.textContent);
}); */

//querySelectorAll
/* const enlaces = document.querySelectorAll('#principal .enlace:nth-child(odd');
enlaces.forEach(function(enlace){
    console.log(enlace);
})
 */

 /*******Traversing**********/
/*  const navegacion = document.querySelector('#principal');
 //chilNodes retorna todos los hijos (incluyendo los espacios en blanco)
 console.log(navegacion.childNodes);
 //children retorna los hijos sin espacios (solo los tags)
 console.log(navegacion.children);
 //nodeName retorna el nombre del tag
 console.log(navegacion.children[0].nodeName); */
 /*nodeType
   1 => Elementos html
   2 => atributos
   3 => text node
   8 => comentarios
   9 => documentos
   10 => doctype
*/
/* console.log(navegacion.children[0].nodeType);
const barra = document.querySelector('.barra');
console.log(barra.children[0].children[0].querySelector('.icono1'));

const cursos = document.querySelectorAll('.card');
console.log(cursos);
console.log(cursos[0].lastElementChild); 
console.log(navegacion.children);*/

//Traversing del hijo al padre
/* const enlaces = document.querySelectorAll('.enlace');
//console.log(enlaces[0].parentNode);
const cursos = document.querySelectorAll('.card');
cursos.forEach(element => {
   // console.log(element);
});
let ejemploTraversing = cursos[0].parentElement.parentElement.parentElement.children[0].textContent;
console.log(ejemploTraversing); */

//Traversing del hermano al hermano
/* const enlaces = document.querySelectorAll('.enlace');
enlaces.forEach(element => {
    console.log(element);
}); */
/* let hermanoAnterior = enlaces[4].previousElementSibling;
console.log(hermanoAnterior);  */
/* let crazyTraversing = enlaces[0].nextElementSibling.nextElementSibling.parentElement.children;
console.log(crazyTraversing); */

//Crear elementos
const enlace = document.createElement('a');
enlace.className = 'enlace';
enlace.id = 'nuevoId';
enlace.setAttribute('href', '#');
enlace.textContent = 'Nuevo enlace';
enlace.style.color = 'orange';
document.querySelector('#secundaria').appendChild(enlace);
console.log(enlace);

//Reemplazar elmementos
const nuevoEncabezado = document.createElement('h2');
nuevoEncabezado.id = 'nuevoEncabezado';
nuevoEncabezado.appendChild( document.createTextNode('Los mejores cursos') );
console.log(nuevoEncabezado);
const anterior = document.querySelector('#encabezado');
const elPadre = document.querySelector('#lista-cursos');
elPadre.replaceChild(nuevoEncabezado, anterior);
console.log(anterior.parentElement);