"use strict";

const FinalState = (updated)=> {

  const parent = $('<div class="container-fluid"></div>');
  const divArriba = $('<div class="morado-light center-align div-arriba"><img src="assets/img/icons/engine.png" class="icono-engine"><img src="assets/img/icons/happy-face.png" class="icono-happy-face"><h5 class="white-text">Hola</h5><div class="div-eye"><img src="assets/img/icons/eye.png" class="icono-eye"><a href="#" class="turquesa">Mostrar Saldo</a></div></div>');
  const divAbajo = $('<div class="morado-dark"></div>');
  const divHeader = $('<div class="final-abajo-header"><h5 class="white-text">últimos movimientos</h5><a href="#"><img src="assets/img/icons/right-arrow-circular-button.png" class=""></a>');
  const divBody = $('<div><img src="assets/img/icons/icon.png" class=""></div><div><h5>¿Aún no realizas tu primer <br> pago?</h5><p>Es rápido y sencillo</p></div>');
  const divFooter = $('<div><img src="assets/img/icons/send.png" class=""><p>enviar pago</p></div><div><img src="assets/img/icons/code-qr.png" class=""><p>recibir pago</p></div>')

  divAbajo.append(divHeader);
  divAbajo.append(divBody);
  divAbajo.append(divFooter);
  parent.append(divArriba);
  parent.append(divAbajo);

  return parent;

}
