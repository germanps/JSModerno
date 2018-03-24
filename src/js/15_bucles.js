console.log('Bucles')
//For
const productos = ['Camisa', 'Guitarra', 'Juego PS4', 'Televisión'];
for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log(`Vamos por el numero: ${i}`);
        break;
    }
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    if(i % 2 == 0){
        console.log(`El múmero ${i} es par`);
    } else{
        console.log(`El múmero ${i} es impar`)
    }
    
}

for (let i = 0; i < productos.length; i++) {
    const element = productos[i];
    console.log(`El producto ${element} fué agregado al carrito`);
}

//While
let i = 0;
while (i < 10) {
    if (i === 5) {
        console.log('Cinco');
        break;
    }
    console.log(`Número: ${i}`);
    i++;
}
let j = 1;
while(j < productos.length){
    console.log(`Reproduciendo la canción: ${j}`);
    j++;
}

//Do While (por lo menos entra una vez en el bucle)
let z = 1;
do {
    console.log(`Número: ${z}`);
    z++;
} while (z < 5);