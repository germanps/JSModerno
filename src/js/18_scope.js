console.log('scope');
var a = 'a';
let b = 'b';
const c = 'c';

//Scope de la funcion
function scope(){
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCION: '+ a,b,c)
}

scope();

//Scope de bloque
if(true){
    var a = 'AA';//reescribe la variable global (var)
    let b = 'BB';
    const c = 'CC';
    console.log('BLOQUE: '+ a,b,c)
}

//FOR
for (let b = 0; b <10; b++) {
    console.log(b);    
}


console.log('GLOBALES: '+ a,b,c);