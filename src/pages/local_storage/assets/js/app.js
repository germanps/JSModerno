//Variables
const listaTweets = document.querySelector('#lista-tweets');




//Event listenerts
eventListeners();
function eventListeners(){
   //Cuando se envía el formulario
   document.querySelector('#formulario').addEventListener('submit',agregarTweet,false);
}

//Functions
function agregarTweet (e) {
   e.preventDefault();
   //leer valor del textarea
   const tweet = document.getElementById('tweet').value;

   //crear elemento borrar
   const botonBorrar = document.createElement('a');
   botonBorrar.classList = 'borrar-tweet';
   botonBorrar.innerText = 'X';

   //crear elemento y añadirlo a la lista
   const li = document.createElement('li');
   li.innerText = tweet;
   //añadir boton borrar al tweet
   li.appendChild(botonBorrar);
   //añade el tweet a la lista
   listaTweets.appendChild(li);
}