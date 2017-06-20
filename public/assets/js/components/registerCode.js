"use strict";

const RegisterCode = (updated)=>{

  const parent = $('<div></div>');
  const divImg = $('<div></div>');
  const img = $('<img src="assets/img/icons/message.png">');
  const h2 = $('<h2>Ahora ingresa tu código</h2>');
  const p = $('<p>Enviamos un SMS con el código de validación al número <span>'+ state.phoneNumber +'</span></p>');
  const divForm = $('<div></div>');
  const icon = $('<img src="assets/img/icons/lock.png">');
  const input = $('<input type="text" id ="code" maxlength="6" required placeholder="- - - - -">');
  const divMessage = $('<div></div>');
  const message = $('<p>Reintentar en <img src="assets/img/icons/clock.png"> 21</p>');

  divImg.append(img);
  divForm.append(icon);
  divForm.append(input);
  divMessage.append(message);
  parent.append(divImg);
  parent.append(h2);
  parent.append(p);
  parent.append(divForm);
  parent.append(divMessage);


  input.on("keyup", function(){
    
  });

  return parent;
}
