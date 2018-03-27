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
const enlaces = document.querySelectorAll('#principal .enlace:nth-child(odd');
enlaces.forEach(function(enlace){
    console.log(enlace);
})
