console.log('if else');
const edad = 16;

if(edad > 18){
    console.log('Eres mayor de edad');
}else{
    console.log('Eres menor de edad');
}

//Comprobar que una variable tiene un valor
let puntuacion = 1000;
puntuacion = null;
if(puntuacion){
    console.log(`La puntuación es de ${puntuacion}`);
}else{
    console.log(`No hay puntuación`);
}

//Comprovar dos variables
let efectivo = 500;
let totalCarrito = 3200;
if(efectivo > totalCarrito){
    console.log('Pago correcto!')
}else{
    console.log('No ha efectivo suficiente')
}

//ElseIf
let hora = 25;
if (hora > 0 && hora <= 12) {
    console.log('Buenos dias');
}else if(hora > 12 && hora <= 20){
    console.log('Buenas tardes');
}else if(hora < 24){
    console.log('Buenas noches');
}else{
    console.log('Hora no válida');
}

if(puntuacion < 150){
    console.log('puntuacion < 150');
    //solo se imprimirá la primera condicion
    //aunque la segunda tb sea true
    console.log('puntuacion < 200');
}

//Operador
let cash = 300,
    credito = 300,
    disponible= cash + credito,
    totalPagar = 500;

if(totalPagar < cash || totalPagar < credito ){
    console.log('Puedo pagar');
}else if(totalPagar < disponible){
    console.log('Pago con ambos');
}else{
    console.log('Fondos insuficientes');
}

//Operador ternario
const logueado = false;
console.log( logueado === true ? 'Estas logueado!' : 'No estas logueado' );