// Eliminar de Local Storage
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
});