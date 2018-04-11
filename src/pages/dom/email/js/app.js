// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const inputs = [email, asunto, mensaje];//array de inputs
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');


//listeners
eventListeners();
function eventListeners() {
  //inicio de la aplicación y desabilitar submit
  document.addEventListener('DOMContentLoaded', inicioApp, false);
  //campos del formulario
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    element.addEventListener('blur', validadCampo, false);
  }
  formularioEnviar.addEventListener('submit', enviarEmail, false);
  resetBtn.addEventListener('click', resetFormulario, false);
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

  //Si el tipo de campo es email tenemos que validar el email
  if(this.type == 'email'){
    validarEmail(this);
  }

  //Habilitar boton submit
  let errores = document.querySelectorAll('.error');
  if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
    if (errores.length === 0) {
      btnEnviar.disabled = false;
    }
  }else{
    btnEnviar.disabled = true;
  }
}

//Verifica si el campo esta vacio
function validarLongitud (campo){
  if (campo.value.length > 0) {
    campo.classList.add('validado');
    campo.classList.remove('error');
  }else{
    campo.classList.add('error');
    campo.classList.remove('validado');
  }
}

//Validar Email
function validarEmail(campo) {
  const mensaje = campo.value;
  if(mensaje.indexOf('@') !== -1){
    if(mensaje.indexOf('.') !== -1){
      campo.classList.add('validado');
      campo.classList.remove('error');
    }

  }else{
    campo.classList.add('error');
    campo.classList.remove('validado');
  }
}

//Al enviar el correo
function enviarEmail (e) {
  //Gif spinner al presionar Enviar
  const spinner = document.getElementById('spinner');
  spinner.style.display = 'block';

  //Gif cuando se envia el mail
  const enviado = document.createElement('img');
  const loaders = document.getElementById('loaders');
  enviado.src = 'img/mail.gif';
  enviado.style.display = 'block';
  //Ocultar spinner y mostrar gif enviado
  setTimeout(function() {
    spinner.style.display = 'none';
    loaders.appendChild(enviado);
    //Borrar el gif del icono enviado y reseta el formulario
    setTimeout(function(){
      loaders.removeChild(enviado);
      resetFormulario();
    }, 5000);
  }, 3000);

  e.preventDefault()
}

//Reset del formulario
function resetFormulario () {
  formularioEnviar.reset();
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    //Quitamos todas las clases
    if(element.classList.contains('error')){
      element.classList.remove('error');
    }
    if(element.classList.contains('validado')){
      element.classList.remove('validado');
    }
  }
  e.preventDefault();
}