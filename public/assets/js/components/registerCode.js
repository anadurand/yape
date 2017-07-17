"use strict";

const RegisterCode = (updated)=>{

  const parent = $('<div class="initial-parent center-align"></div>');
  const divImg = $('<div></div>');
  const img = $('<img class="header-icon" src="assets/img/icons/message.png">');
  const h4 = $('<h4 class="gris-dark title-h4">Ahora ingresa tu código</h4>');
  const p = $('<p class="gris-letra title-p">Enviamos un SMS con el código de validación al número <span class="morado">'+ state.phoneNumber +'</span></p>');
  const divForm = $('<div class="div-input"></div>');
  const icon = $('<img src="assets/img/icons/lock.png" class="icono-code">');
  const input = $('<input type="tel" id ="code" maxlength="6" class="center-align morado" required placeholder="-  -  -  -  -">');
  const divMessage = $('<div class="div-message"></div>');
  const message = $('<p>Reintentar en <img src="assets/img/icons/clock.png"></p>');
  const counter = $('<span class="counter">21</span>');
  const code = $('<span class="newCode">Ingrese en siguiente codigo: '+ state.code + '</span>');
  const messageError =$('<p class="error rojo"></p>');

  divImg.append(img);
  divForm.append(icon);
  divForm.append(input);
  message.append(counter);
  divMessage.append(message);
  parent.append(divImg);
  parent.append(h4);
  parent.append(p);
  parent.append(divForm);
  parent.append(divMessage);
  parent.append(code);
  parent.append(messageError);

  let countDown = 21;
  var count = setInterval(function(){postResendCode(state.phoneNumber); countDown = 22; $('.counter').text("21"); }, 21000);
  var countClock = setInterval(function(){ countDown= countDown-1; $(".counter").text(countDown); }, 1000);
  input.on({
    keypress: validarNumero,
    keyup: function(e){
              if(state.code == this.value){
                clearInterval(count);
                clearInterval(countClock);

                state.pagina = 3;
                updated();
              }
            }
  });

  return parent;
}
