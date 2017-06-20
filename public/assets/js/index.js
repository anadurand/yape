"use strict";
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.screen) {
    case null:
                wrapper.append(Welcome(updated));
      break;
    case 1:
                wrapper.append(RegisterNumber(updated));

      break;
    case 2:
                wrapper.append(RegisterCode(updated));

      break;
}

  root.append(wrapper);

}

const updated = function(){
  render(root);
}
const state = {
  screen: null,
  termsChecked: false,
  phoneChecked: false,
  phoneNumber: null

}


$( _ => {

  const root = $(".root");
  render(root);
  $('.carousel.carousel-slider').carousel({fullWidth: true});

});
