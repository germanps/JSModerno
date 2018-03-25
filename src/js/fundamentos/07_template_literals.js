//Template antiguo
const producto1 = 'Pizza',
      precio1 = 30;
      producto2 = 'Hamburguesa',
      precio2 = 40;
let html;
html =  '<p>Template antiguo</p>'+
        '<ul>'+
          '<li>Orden: ' + producto1 + '</li>'+
          '<li>Precio: ' + precio1 + '</li>'+
          '<li>Orden: ' + producto2 + '</li>'+
          '<li>Precio: ' + (precio2 + precio1) + '</li>'+
        '</ul>';
document.getElementById('app').innerHTML = html;

//Template literals (nuevo)
html2 = `
        <p>Template antiguo</p>
        <ul>
          <li>Orden: ${producto1}</li>
          <li>Precio: ${precio1}</li>
          <li>Orden: ${producto2}</li>
          <li>Precio: ${precio2}</li>
          <li>Orden: ${precio2}</li>
          <li>Total: ${total(precio1,precio2)}</li>
        </ul>

        `;
        
function total(p1, p2){
  return p1 + p2;
}

document.getElementById('app2').innerHTML = html2;