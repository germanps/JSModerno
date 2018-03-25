console.log('inicio');
/*let nombre = prompt("Introdue tu nombre");
let edad = prompt("Introduce tu edad");*/
//document.getElementById("app").innerHTML = `Bienvenido ${nombre}, tienes ${edad} años`;

//Variables VAR (te recomienda redeclarar la misma mariable)
var nombre = "German",
    apellido = "Pla";
console.log(nombre+ " " +apellido);

//Variables LET (NO te permite redeclarar la misma variable)
let nombre2 = "Juan",
    producto = "Monitor";

console.log(producto);

//Const (Deben inicializarse siempre ni cambiar su valor)
const producto2 = "Teclado";


//Concatenando variables con template literals
let aprendiendo = "Aprendiendo",
   tecnologia = "Javascript";

console.log(`${aprendiendo} ${tecnologia}`);