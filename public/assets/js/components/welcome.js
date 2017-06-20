"use strict";

const Welcome = (updated) => {
  const parent = $('<div class="itial-parent"></div>');
  const slide = $('<div class="carousel carousel-slider center initialized" data-indicators="true"></div>');
  const divPeople = $('<div class="carousel-item" href="#one!"></div>');
  const imgPeople = $('<img src="assets/img/icons/icon-people.png">');
  const h2People = $('<h2>Paga a tus amigos</h2>');
  const pPeople = $('<p>Paga a quien quieras desde donde quieras, sin usar efectivo</p>');
  const divHappy = $('<div class="carousel-item" href="#two!"></div>');
  const imgHappy = $('<img src="assets/img/icons/happy-person.png">');
  const h2Happy = $('<h2>Sin número de cuenta</h2>');
  const pHappy = $('<p>Elige a quien pagar desde tu lista de contactos</p>');
  const divGroup = $('<div class="carousel-item" href="#three!"></div>');
  const imgGroup = $('<img src="assets/img/icons/group-people.png">');
  const h2Group = $('<h2>Gratis y Seguro</h2>');
  const pGroup = $('<p>La transferencia es inmediata y gratuita de una cuenta a otra</p>');
  const button = $('<button>Registrame</button>')


  divPeople.append(imgPeople);
  divPeople.append(h2People);
  divPeople.append(pPeople);
  divHappy.append(imgHappy);
  divHappy.append(h2Happy);
  divHappy.append(pHappy);
  divGroup.append(imgGroup);
  divGroup.append(h2Group);
  divGroup.append(pGroup);
  slide.append(divPeople);
  slide.append(divHappy);
  slide.append(divGroup);

  parent.append(slide);
  parent.append(button);

  button.on("click", function(e){
    e.preventDefault();
    state.screen = 1;
    updated();
  });


  return slide;


}
