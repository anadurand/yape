"use strict";

const RegisterCode = (updated)=>{

  const parent = $('<div class="initial-parent center-align"></div>');
  const divImg = $('<div></div>');
  const img = $('<img class="header-icon" src="assets/img/icons/message.png">');
  const h4 = $('<h4 class="gris-dark title-h4">Ahora ingresa tu código</h4>');
  const p = $('<p class="gris-letra title-p">Enviamos un SMS con el código de validación al número <span class="morado">'+ state.phoneNumber +'</span></p>');
  const divForm = $('<div class="div-input"></div>');
  const icon = $('<img src="assets/img/icons/lock.png">');
  const input = $('<input type="text" id ="code" maxlength="6" class="center-align" required placeholder="-  -  -  -  -">');
  const divMessage = $('<div class="div-message"></div>');
  const message = $('<p>Reintentar en <img src="assets/img/icons/clock.png"> 21</p>');

  divImg.append(img);
  divForm.append(icon);
  divForm.append(input);
  divMessage.append(message);
  parent.append(divImg);
  parent.append(h4);
  parent.append(p);
  parent.append(divForm);
  parent.append(divMessage);


  input.on("keyup", function(){

  });

  return parent;
}
