"use strict";

const RegisterNumber = (updated) => {
  const parent = $('<div class="initial-parent center-align"></div>');
  const divImg = $('<div class="center-align"></div>');
  const img = $('<img class="header-icon" src="assets/img/icons/phone.png">');
  const h4 = $('<h4 class="gris-dark title-h4 center-align">Para comenzar validemos tu número</h4>');
  const p = $('<p class="gris-letra title-p">Recibirás un SMS con un código de validación</p>');
  const divForm = $('<div class="div-input"></div>');
  const icon = $('<img src="assets/img/icons/phoneandnumber.png" class="icono-phone">');
  const input = $('<input type="tel" id ="phone" maxlength="11" class="center-align morado" required>');
  const divTerms = $('<div class="div-terms"></div>');
  const checkbox = $('<input type="checkbox" id = "terms" class="filled-in" required>');
  const terms = $('<label for="terms">Acepto los <a href="#">Términos y condiciones.</a></label>');
  const btnContinuar = $('<button id="next" class="btn disabled boton-amarillo">continuar</button>');
  const messageError = $('<p class="error rojo"></p>');

  divImg.append(img);
  divForm.append(icon);
  divForm.append(input);
  divTerms.append(checkbox);
  divTerms.append(terms);
  parent.append(divImg);
  parent.append(h4);
  parent.append(p);
  parent.append(divForm);
  parent.append(divTerms);
  parent.append(btnContinuar);
  parent.append(messageError);


  input.on({
    keypress: validarNumero,
    keyup: function(e){
      e.preventDefault();
      var regex = /^[0-9]+$/;
      this.value = this.value.replace(/ /g,"");
      this.value = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      var proto = this.value.replace(/ /g,"");
      console.log(proto);
      if(regex.test(proto) && proto.length == 9){
         state.phoneNumber= proto;
       }else{ state.phoneNumber = null;}

      habilitarBoton();
      }
    });

  checkbox.on("change", (e)=> {
    e.preventDefault();
    state.termsChecked = !state.termsChecked;
      habilitarBoton();
  });

  btnContinuar.on("click", function(e){
    e.preventDefault();
    postRegisterNumber(state.phoneNumber, state.termsChecked, updated);
  });

  return parent;

}
