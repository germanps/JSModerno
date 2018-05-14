//Extraer valores por destructurin de arrays
const ciudades = ['Londres', 'New York', 'Barcelona', 'Milan', {
      idioma: 'ingles'
   }
   
];

//Acceso a los valores 

const [primeraCiudad,segundaCiudad] = ciudades;
console.log(primeraCiudad);
console.log(segundaCiudad);

const [ , , , ciudad] = ciudades;
console.log(ciudad);

//Ejemplo avanzado
const cliente = {
   tipo: 'Premium',
   saldo: 30000,
   datos: {
      nombre: 'Pedro',
      apellido: 'Perez',
      residencia: {
         ciudad: 'Mexico'
      }
   },
   movimientos: ['12-03-2018', '12-03-2017', '12-03-2016']
}
let {
   tipo,
   datos,
   datos: {residencia},
   movimientos,
   movimientos : [uno]
} = cliente;
console.log(residencia);
console.log(tipo);
console.log(datos);
console.log(movimientos);
console.log(uno);