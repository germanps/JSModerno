// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');


//listeners
eventListeners();
function eventListeners() {
  //inicio de la aplicación y desabilitar submit
  document.addEventListener('DOMContentLoaded', inicioApp, false);
  //campos del formulario
  const inputs = [email, asunto, mensaje];
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    element.addEventListener('blur', validadCampo, false);
  }
}




//funciones
function inicioApp () {
  //deshabilitar el envío 
  btnEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validadCampo (e) {
  //se valida la longitud del texto y que no esté vacio
  validarLongitud(this);
  //console.log(`salgo del input ${e.target.id}`);
  let errores = document.querySelectorAll('.error');
  if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }else{
    btnEnviar.disabled = true;
  }
}

function validarLongitud (campo){
  console.log(campo.value.length);
  if (campo.value.length > 0) {
    campo.classList.add('validado');
    campo.classList.remove('error');
  }else{
    campo.classList.add('error');
    campo.classList.remove('validado');
  }
}