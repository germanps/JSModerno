console.log('window object');
console.log(window);

//Altos y anchos del navegador
let alto,
    ancho;

alto = window.outerHeight;
ancho = window.outerWidth;

console.log(`Alto de todo el navegador: ${alto}`);
console.log(`Ancho de todo el navegador: ${ancho}`);


alto = window.innerHeight;
ancho = window.innerWidth;

console.log(`Alto de sólo la ventana del navegador: ${alto}`);
console.log(`Ancho de sólo la ventana del navegador: ${ancho}`);

//Ubicación
let ubicacion;
ubicacion = window.location;
console.log(ubicacion);

ubicacion = window.location.host;
console.log(ubicacion);

ubicacion = window.location.port;
console.log(ubicacion);

ubicacion = window.location.hostname;
console.log(ubicacion);

ubicacion = window.location.protocol;
console.log(ubicacion);


//Redireccionar
//window.location.href = 'http://www.google.com';

//Redireccionar al historial
//window.history.go(-2);

//Navigator
ubicacion = window.navigator;
console.log(ubicacion);

ubicacion = window.navigator.vendor;
console.log(ubicacion);

ubicacion = window.navigator.appName;
console.log(ubicacion);

ubicacion = window.navigator.appVersion;
console.log(ubicacion);

ubicacion = window.navigator.userAgent;
console.log(ubicacion);

ubicacion = window.navigator.language;
console.log(ubicacion);