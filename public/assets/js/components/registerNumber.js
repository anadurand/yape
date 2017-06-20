"use strict";

const RegisterNumber = (updated) => {
  const parent = $('<div></div>');
  const divImg = $('<div></div>');
  const img = $('<img src="assets/img/icons/phone.png">');
  const h2 = $('<h2>Para comenzar validemos tu número</h2>');
  const p = $('<p>Recibirás un SMS con un código de validación</p>');
  const divForm = $('<div></div>');
  const icon = $('<img src="assets/img/icons/phoneandnumber.png">');
  const input = $('<input type="tel" id ="phone" maxlength="9" required>');
  const divTerms = $('<div></div>');
  const checkbox = $('<input type="checkbox" id = "terms" required>');
  const terms = $('<p>Acepto los <a href="#">Términos y condiciones.</a></p>');
  const btnContinuar = $('<button id="next">continuar</button>');
  btnContinuar.attr("disabled", true);

  divImg.append(img);
  divForm.append(icon);
  divForm.append(input);
  divTerms.append(checkbox);
  divTerms.append(terms);
  parent.append(divImg);
  parent.append(h2);
  parent.append(p);
  parent.append(divForm);
  parent.append(divTerms);
  parent.append(btnContinuar);



  input.on("keyup", function(e){
    console.log(this.value);
    if(e.which>=48 && e.which<=57 && this.value.length == 9){
      state.phoneChecked = true;
      state.phoneNumber = this.value;
      habilitarBoton();
    }else {
      state.phoneChecked = false;
      habilitarBoton();
    }

  });
  checkbox.on("change", (e)=> {
    state.termsChecked = !state.termsChecked;
      habilitarBoton();
  });


  btnContinuar.on("click", function(e){
    e.preventDefault();
    postRegisterNumber(state.phoneNumber, state.termsChecked, updated);
  });

  return parent;

}
