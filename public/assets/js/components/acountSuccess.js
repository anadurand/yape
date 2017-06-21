"use strict";

const AcountSuccess = (updated)=> {

  const parent = $('<div class="div-success boton-amarillo center-align valign-wrapper"></div>');
  const divConte = $('<div class="ok-conte"></div>');
  const img = $('<img class="img-ok" src="assets/img/icons/check.png">');
  const h5 = $('<h5 class="morado">¡Bien! <br> Ahora puedes usar Yape</h5>');

  divConte.append(img);
  divConte.append(h5);
  parent.append(divConte);
  state.pagina = 5;
  setTimeout(function(){ updated();},3000);

  return parent;

}
